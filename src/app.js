const index_id = document.getElementById('berekenTool');
const clickButton = () => {
    alert('Word aan gewerkt')
}
const templateOne = (
    <section>        
        <div>
            <div id="divOne">
            </div>
            <div id="divTwo">
                <img src="images/logo.png" width="50%" />
                    <input type="text" className="formControl" name="option" placeholder="Dagkoers"/>
                    <input type="text" className="formControl" name="option" placeholder="Spaarbedrag"/>
                    <input type="number" className="formControl" name="option" min="1" max="30" placeholder="Looptijd"/>
                    <input type="text" className="formControl" name="option" placeholder="Rente"/>
                    <div>
                    <button type="button" onClick={clickButton}>Berekenen</button>
                    </div>

            </div>
        </div> 
    </section>
);
ReactDOM.render(templateOne, index_id);
