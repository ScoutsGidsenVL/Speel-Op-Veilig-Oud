# URL Schema
Root: https://az-app-speel-op-veilig-production.azurewebsites.net/

## Dynamische pagian's

| url | bedoeling | verantwoordelijke module |
|---|---|---|
|/  | redirect naar de home  |   |
|/home  | index pagina (overzicht van de thema's en extra's) | HomePageModule  |
|/thema | redirect naar de home  |   |
|/thema/{{thema-naam}} | alle tekstjes uit een bepaald thema  | ThemaPageModule |
|/vragen-en-antwoorden | vragen bij de hoofdstukken | FaqPageModule |
    
## statische pagina's
| url | bedoeling | verantwoordelijke module |
|---|---|---|
|/wegwijs | wijgwijs doorheen deze brochure | WegwijsPageModule |
|/crisis-en-noodsituaties | Crisis en noodsituaties | NoodsituatiePageModule |
|/veilige-activiteit | Een veilige activiteit | ActiviteitPageModule | 
|/verzekeringen-en-aansprakelijkheid | Verzekeringen en aansprakelijkheid bij activiteiten | VerzekeringenPageModule |