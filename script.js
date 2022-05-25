/*
	Bra att veta:
	
	1) Våra todos sparas i ett objekt, t.ex.
		{
			title: "Rätta inlämningsuppgifter",
			prio: 3
		}
		
	2) Alla våra todos ligger sedan i en lista, t.ex.
		[
			{...},
			{...},
			{...},
			{...}
		]
		
	3) Listan på todos sparas i localStorage, men nyckeln "todos"
	
	4) För att göra en lista med alla todos till JSON använder vi för att spara detta i localStorage.
		JSON.parse(string) // Gör om en sträng till datatyper
		JSON.stringify(data) // Gör om datatyper till strängar
*/

// Ladda in todos, när sidan körs
renderTodos();


function getTodos() {
	// Hämtar alla todos från localStorage
	var todos = localStorage.getItem("todos");
	
	// Kontrollera om det finns några todos i localStorage
	if(todos == null) {
		// Det finns inget i localStorage, så vi skapar en tom lista där
		localStorage.setItem("todos", JSON.stringify([]));
		// Returnerar en tom lista (= inga todos)
		return [];
	} else {
		// Returnerar alla todos i en lista (från JSON => lista med objekt)
		return JSON.parse(todos);
	}
}

function renderTodos(order=false) {
	// Hämtar alla todos
	var todos = getTodos();
	
	if (order) {
		todos.sort(compare);
	}
	
	$("#todo-table tbody").html("");

	// För varje todo, i listan av todos
	for (var i = 0; i < todos.length; i++) {
		// Plocka ut aktuell todo från listan
		var todo = todos[i];

		// Lägger till vår todo i <tbody>-elementet i elementet #todo-table
		$("#todo-table tbody").append(`
			<tr class='${getPrioClass(todo.prio)}'>
				<td>${todo.title}</td>
				<td>${getPrioTitle(todo.prio)}</td>
				<td><img src='delete.png' alt='delete item'></td>
			</tr>
			`);
	}
}

$("#todo").on("keyup", function(){
	if($(this).val() != ""){
		$(this).removeClass("is-invalid");
	}else{
		$(this).addClass("is-invalid");
	}
});

$("#sort-by-prio").on("click", function() {
	renderTodos(true);
});

$("#add-item").on("submit", function(e) {
	e.preventDefault();
	
	var todo = $("#todo").val();
	if (todo == "") {
		$("#todo").addClass("is-invalid");
		return false;
	}
	
	var todos = getTodos();
	todos.push({
		title: todo,
		prio: $("#prio").val()
	});
	
	localStorage.setItem("todos", JSON.stringify(todos));
	
	renderTodos();
	
	$("#add-item").trigger("reset");
});

$("#todo-table").on("click", "img", function() {
	var todoTitle = $(this).parent().prev().prev().text();
	
	var todos = getTodos();

	var todos = todos.filter(function(todo) {
		return todo.title != todoTitle;
	})
		
	localStorage.setItem("todos", JSON.stringify(todos));
	
	renderTodos();
	
});

function getPrioTitle(prio) {
	if (prio == 1) {
		return "Låg";
	} else if (prio == 2) {
		return "Medel";
	} else if (prio == 3) {
		return "Hög";
	}
	return "";
}

function getPrioClass(prio) {
	if (prio == 1) {
		return "table-success";
	} else if (prio == 2) {
		return "table-warning";
	} else if (prio == 3) {
		return "table-danger";
	}
	return "";
}

function compare(a,b) {
  if (a.prio < b.prio)
    return -1;
  if (a.prio > b.prio)
    return 1;
  return 0;
}