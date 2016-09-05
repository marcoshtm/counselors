import { Component } from '@angular/core';

@Component({
	selector: 'login',
	template : `
		<section class="register-container">
			<div class="ui-g">
				<div class="ui-g-12 ui-md-7 ui-lg-7">
					<div class="calling-panel">
						<p class="calling-p">"Amizades. Em conversas particulares."</p> <br /><br />
						<p class="calling-p">Peça um conselho, ou aconselhe alguém.<br />
						<p class="calling-p">É gratificante e revelador.</p> <br />
					</div>
				</div>
				<div class="ui-g-12 ui-md-5 ui-lg-5">
					<div class="register-panel">
						<input class="register-item register-input ui-g-12" type="text" placeholder="Nome" /> <br />
						<input class="register-item register-input ui-g-12" type="text" placeholder="Sobrenome" /> <br />
						<input class="register-item register-input ui-g-12" type="text" placeholder="Email" /> <br />
						<input class="register-item register-input ui-g-12" type="password" placeholder="Nova senha" /> <br />
						<input class="register-item register-button ui-g-12" type="button" value="Cadastre-se" /> <br />
					</div>
				</div>
			</div>
		</section>
	`,
	styleUrls: ['app/css/login.component.css']
})
export class LoginComponent {
}