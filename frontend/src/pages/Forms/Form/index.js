import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Chips} from 'primereact/chips';
import {Calendar} from 'primereact/calendar';
import './styles.css'


export default  class Formulario1 extends Component{


    constructor(props) {
        super(props);
        this.state = {
            electionName: this.props.electionName,
            domain: this.props.domain,
            candidates: this.props.candidates,
            calendarBegin: this.props.calendarBegin,
            calendarEnd: this.props.calendarEnd
        };
        
    }



    render () {

        this.handleElectionChange = () => {
            let _name = document.querySelector('#input-election-name').value;
            this.setState({electionName: _name});
            this.props.onElectionName(_name);
    
        }

        this.handleDomainChange = () => {
            let _domain = document.querySelector('#input-domain-address').value.split('@').join('');
            this.setState({domain: _domain});
            this.props.onDomainName(_domain);

        }

        this.handleCalendarBeginChange = (_calendarBegin) => {
            this.setState({calendarBegin: _calendarBegin});
            this.props.onCalendarBeginChange(_calendarBegin);

        }

        this.handleCalendarEndChange = (_calendarEnd) => {
            this.setState({calendarEnd: _calendarEnd});
            this.props.onCalendarEndChange(_calendarEnd);

        }

        this.handleCandidatesChange = (_candidates) => {
            this.setState({candidates: _candidates});
            this.props.onCandidatesChange(_candidates);

        }

        let br = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
            dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
            dayNamesMin: ["DOM", "SEG", "TER", "QUI", "QUA", "SEX", "SAB"],
            monthNames: ["janeira", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            monthNamesShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            today: 'Hoje',
            clear: 'Limpo',
            dateFormat: 'dd/mm/yy',
            weekHeader: 'Sm'
        };
    
        return (
            <form className="main-form">
            <fieldset >
                <legend>Cadastro</legend>
                <span className="input-content">
                    <span className="p-float-label">
                        <InputText value={this.state.electionName} onChange={this.handleElectionChange } id="input-election-name"/>
                        <label className="lb-input" htmlFor="input-election-name" >Nome da Eleição</label>
                    </span>
                

                    <div className="p-float-label">

                        <InputText value={'@'+this.state.domain} onChange={this.handleDomainChange } id="input-domain-address"/>
                       <label className="lb-input" htmlFor="input-domain-address" >Domínio</label>
                       
                       

                        <Calendar locale={br} minDate={this.minDate} id="calendar-input-begin" dateFormat="dd/mm/yy" value={this.state.calendarBegin} onChange={(e) => this.handleCalendarBeginChange(e.value)} showTime={true} readOnlyInput={true} />
                        <label className="lb-input-esp" htmlFor="calendar-input-begin" >data e hora de início</label>
                        
                        <Calendar locale={br} minDate={this.state.calendarBegin} id="calendar-input-end" dateFormat="dd/mm/yy" value={this.state.calendarEnd} onChange={(e) => this.handleCalendarEndChange(e.value)} showTime={true} readOnlyInput={true} />
                        <label className="lb-input-esp2" htmlFor="calendar-input-end" >data e hora de fim</label>
                    </div>


                    <span className="p-float-label">
                        <Chips value={this.state.candidates} id="cadidates-input-id" value={this.state.candidates} onChange={(e) => this.handleCandidatesChange(e.value)} ></Chips>
                        <label className="lb-input" htmlFor="cadidates-input-id" >Candidatos</label>
                    </span>
                    
                </span>
                
            </fieldset>
            </form>

        );

    };
}