import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../db.json'; 
import { Postagem } from '../../models/post.model'; 
import { CartaoPostagemComponent } from '../../componentes/cartao-postagem/cartao-postagem.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-postagem',
  standalone: true,
  imports: [CommonModule, CartaoPostagemComponent], 
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css']
})
export class ListaPostagemComponent implements OnInit {
  posts: Postagem[] = [];

  ngOnInit() {
    this.posts = data.posts
  }

  constructor(private router: Router) {}

  vaParaOPost(postId: string) {
    this.router.navigate(["/posts", postId]);
  }

}
