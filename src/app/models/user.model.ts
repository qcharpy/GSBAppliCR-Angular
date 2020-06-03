// Class user
export class User {

  private id: string;
  private prenom: string;
  private nom : string;
  private login: string;
  private mdp: string;

  constructor(id: string, prenom: string, nom: string, login: string, mdp: string) 
  {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.login = login;
    this.mdp = mdp;
  }

  
  public get Id() : string {
    return this.id;
  }

  
  public get Prenom() : string {
    return this.prenom;
  }

  
  public get Nom() : string {
    return this.nom;
  }

  
  public get Login() : string {
    return this.login;
  }
  
  
  
  public get Mdp() : string {
    return this.mdp;
  }
  
  
}
