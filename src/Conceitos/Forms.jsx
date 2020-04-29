import React, { Component } from 'react'

export default class Forms extends Component {

    constructor() {
        super();

        this.state = {
            inputText: 'value',
            checkBox: false,
            radio: 'radioControledComponent1',
            select: "2",
            selectMultiple: ["2", 3]
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', 'prevState', prevState.selectMultiple, 'State', this.state.selectMultiple);
    }

    render() {
        return (
            <div>

                {/* 
                    Nota importante: Componentes React não são elementos HTML comuns. Componentes 
                    são funções usadas pelo React para gera elementos HTML. 
                */}

                {/* Uncontrolled Components */}
                <form onSubmit={event => {
                    event.preventDefault();

                    const values = Object.values(event.target);

                    const inputValues = {}

                    for (let index = 0; index < values.length; index++) {
                        const { name, defaultValue, checked, options } = values[index];

                        if (name && options) {
                            const optionsSelected = [];

                            for (let index = 0; index < options.length; index++) {
                                const element = options[index];

                                if (element.selected) {
                                    optionsSelected.push(element.value);
                                }
                            }

                            inputValues[name] = optionsSelected;
                        }
                        else if (name && defaultValue && checked) {
                            inputValues[name] = defaultValue;
                        }
                        else if (name && defaultValue) {
                            inputValues[name] = defaultValue;
                        }
                    }

                    console.log(inputValues);

                }}>
                    <p><strong>Uncontrolled Components</strong></p>
                    <div>
                        <label htmlFor="inputTexUncontroledComponent">Input Text: </label>
                        <input type="text" name="inputTexUncontroledComponent" id="inputTexUncontroledComponent" defaultValue="defaultValue" />
                    </div>
                    {/* 
                        É obrigatório fechar a tag do componente input como um xml />.
                        Para componentes não controlados deve se usar a propriedade defaultValue.
                    */}

                    <label htmlFor="checkBoxUncontroledComponent">
                        CheckBox
                        <input type="checkbox" name="checkBoxUncontroledComponent" id="checkBoxUncontroledComponent" defaultValue="defaultValue"
                            defaultChecked={true} />
                    </label>

                    <div>
                        Radio
                        <input type="radio" name="radioUncontroledComponent" id="radioUncontroledComponent1" defaultValue="radio1" />
                        <input type="radio" name="radioUncontroledComponent" id="radioUncontroledComponent2" defaultValue="radio2" defaultChecked />
                    </div>

                    {/* 
                        Para componentes do tipo checkbox e radio não controlados, a propriedade 'checked'
                        deve ser sunstituída por 'defaultChecked'. Caso não explícito, o valor por padrão é true.
                    */}

                    <div>
                        <label htmlFor="selectUncontroledComponent">Select: </label>
                        <select name="selectUncontroledComponent" id="selectUncontroledComponent" defaultValue="2">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>

                        {/* 
                            Para componentes do tipo select, existe uma propriedade especial para definir o valor 
                            padrão dos options, você define a defaultValue direto no select. Essa propriedade não 
                            tem no HTML normal.
                        */}

                        <label htmlFor="selectMultipleUncontroledComponent"> Select Multiple: </label>
                        <select name="selectMultipleUncontroledComponent" id="selectMultipleUncontroledComponent" multiple={true}
                            defaultValue={[2, 3]}>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>

                        {/* 
                            Para componentes do tipo select com a propriedade multiple, no defaultValue você pode
                            passar um array para definir o valor padrão.
                        */}
                    </div>
                    <button type="submit">Enviar</button>
                </form>

                {/* Controlled Components */}
                <form onSubmit={event => {
                    event.preventDefault();
                    console.log(this.state);                    
                }}>
                    <p><strong>Controlled Components</strong></p>
                    <div>
                        <label htmlFor="inputTextControledComponent">Input Text: </label>
                        <input type="text" name="inputTextControledComponent" id="inputTextControledComponent" value={this.state.inputText}
                            onChange={event => this.setState({ inputText: event.target.value })} />
                    </div>

                    {/* 
                        Para componentes controlados, deve se usar a propriedade value em conjunto
                        com a propriedade onChange.
                    */}

                    <label htmlFor="checkBoxControledComponent">
                        CheckBox
                        <input type="checkbox" name="checkBoxControledComponent" id="checkBoxControledComponent" checked={this.state.checkBox}
                            onChange={event => this.setState({ checkBox: event.target.checked })} />
                    </label>

                    <div>
                        Radio
                    <input type="radio" name="radioControledComponent" id="radioControledComponent1"
                            checked={this.state.radio === 'radioControledComponent1'} onChange={event => this.setState({ radio: event.target.value })}
                            value="radioControledComponent1" />
                        <input type="radio" name="radioControledComponent" id="radioControledComponent2"
                            onChange={event => this.setState({ radio: event.target.value })} value="radioControledComponent2" />
                    </div>

                    <div>
                        <label htmlFor="selectControledComponent">Select: </label>
                        <select name="selectControledComponent" id="selectControledComponent" value={this.state.select}
                            onChange={event => this.setState({ select: event.target.value })}>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>

                        <label htmlFor="selectMultipleControledComponent"> Select Multiple: </label>
                        <select name="selectMultipleControledComponent" id="selectMultipleControledComponent" multiple={true}
                            onChange={event => {
                                const options = event.target.options;

                                const optionsSelected = [];

                                for (let index = 0; index < options.length; index++) {
                                    const element = options[index];

                                    if (element.selected) {
                                        optionsSelected.push(element.value);
                                    }
                                }

                                this.setState({ selectMultiple: optionsSelected })

                            }} value={this.state.selectMultiple}>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>

                        {/* 
                            Para componentes do tipo select com a propriedade multiple, no value você pode
                            atribuir um array para definir o valor padrão.
                        */}
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                {/* 
                    Para um controle maior da sua aplicação o ideal é que seja usado sempre os 
                    Controlled Components.
                */}
            </div>
        )
    }
}