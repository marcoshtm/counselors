import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	template : `
		<section class="register-container">
			<div class="calling-panel">
				<p>"Amizades. Em conversas particulares."</p> <br /><br />
				<p>Peça um conselho, ou aconselhe alguém.<br />
				<p>É gratificante e revelador.</p> <br />
			</div>
			<div class="register-panel">
				<input class="register-item register-input" type="text" placeholder="Nome" /> <br />
				<input class="register-item register-input" type="text" placeholder="Sobrenome" /> <br />
				<input class="register-item register-input" type="text" placeholder="Email" /> <br />
				<input class="register-item register-input" type="password" placeholder="Nova senha" /> <br />
				<input class="register-item register-button" type="button" value="Cadastre-se" /> <br />
			</div>
		</section>
	`,
	styleUrls: ['app/css/site.css']
})
export class LoginComponent {
}