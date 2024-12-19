$(document).ready(function () {
    $(".singleClickHide").click(function () {
        $(".paragraph").hide();
    })
})

$(document).ready(function () {
    console.log("ready 1");
})

$(document).ready(function () {
    console.log("ready 2");
})

$(document).ready(function () {
    $(".doubleClickHide").dblclick(function () {
        $(".paragraph").hide();
    });
});

$(document).ready(function () {
    $(".mouseenter").mouseenter(function () {
        console.log("mouse entered");
    })
});

$(document).ready(function () {
    $(".mouseleft").mouseleave(function () {
        console.log("mouse left");
    })
});

// $(document).ready(function(){
//     $(".h1").mouseleave(function(){
//         $(this).css("background-color","red");
//     })
//     $(".h1").mouseenter(function(){
//         $(this).css("background-color","white");
//     })
// });

$(document).ready(function () {
    $(".h1").hover(
        function () {
            $(this).css("color", "yellow");
        },
        function () {
            $(this).css("color", "black");
        }
    )
})

$(document).ready(function () {
    $(".input-field").focus(function () {
        $(this).css("background-color", "red");
    })
    $(".input-field").blur(function () {
        $(this).css("background-color", "yellow");
    })
})

$(document).ready(function () {
    $(".getdata").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/1",
            method: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log(error);
            }
        })
    })
})

$(document).ready(function () {
    $(".nthchild li:even").css("color", "blue");
    $(".nthchild li:odd").css("color", "red");
});

$(document).ready(function () {
    $(".descendant").click(function () {
        $("#parent p").css("color", "green");
    })
});

$(document).ready(function () {
    $(".children").click(function () {
        $("#parent2 > p").css("color", "red");
    })
});

$(document).ready(function () {
    $("li:contains('Example')").css("color", "red");
})


$(document).ready(function () {
    // Get HTML content
    var htmlContent = $("#myElement").html();
    console.log(htmlContent);

    // Set HTML content
    setTimeout(function () {
        $("#myElement").html("<p>New HTML content</p>");

    }, 2000);
})

//In simpler terms, toggleClass will check if the specified class is already applied to the selected elements. If it is, it will remove the class; if it's not, it will add the class.

// let a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

const arr = [1,2,3,4,5];
const red = arr.reduce((acc,curr) => {
    return acc > curr;
},0);
console.log(red);

