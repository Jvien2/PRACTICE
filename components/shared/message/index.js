

export default function massageBox(){
    return (
        <div class="mainBox" style={{
            backgroundColor: "gray",
            width: 500,
            height: 200,
            padding: 20,
            display: "flex",
            justifyContent: 
            

        }}>
            <div class="text" style={{
                alignSelf: "flex-start",
            }}>
                <span>@Username</span>
                <p>comment 1 lorem ipsum blah blah blah</p>
                <span>dd/mm/yyyy - 00:00:00</span>
            </div>
            <div class="replyButton" style={{
                backgroundColor: "green",
                alignItems: "flex-end",

            }}>
                <span>Button</span>
            </div>
        </div>
    );
}