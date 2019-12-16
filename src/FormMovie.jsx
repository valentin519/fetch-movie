import React from 'react'
import './App.css'





class FormMovie extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title : '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.postForm = this.postForm.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();
    };
    postForm (){
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";
    fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
    } else {
      alert(`Le film à été ajoué !`);
    }
  }).catch(e => {
    console.error(e);
    alert('Erreur lors de l\'ajout du film');
  });
}


        render(){
            return (
            <div className="FormEmployee">
                <h1>Saisi d'un film</h1>
                <form onSubmit={this.submitForm}>
                <fieldset>
        <legend>Informations</legend>
        <div className="form-data">
            <label htmlFor="title">Nom</label>
            <input
            type="text"
            id="title"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
            />
        </div>

        <div className="form-data">
            <label htmlFor="poster">Poster</label>
            <input
            type="url"
            id="poster"
            name="poster"
            onChange={this.onChange}
            value={this.state.poster}
            />
        </div>

        <div className="form-data">
            <label htmlFor="comment">commentaire</label>
            <input
            type="textarea"
            id="comment"
            name="comment"
            onChange={this.onChange}
            value={this.state.comment}
            />
        </div>
        <hr />
        <div className="form-data">
            <input type="submit" value="Envoyer" onClick= {this.postForm}/>
        </div>
        </fieldset>
    </form>
    </div>


)}
    }

    export default FormMovie