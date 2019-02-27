# URL Schema
Root: speelopveilig.be

## Dynamische pagian's

| url | bedoeling | verantwoordelijke module |
|---|---|---|
|/  | index pagina (overzicht van de thema's en extra's) | HomePageModule  |
|/themas | redirect naar de home  |   |
|/themas/{{thema-naam}} | alle tekstjes uit een bepaald thema  |   |
|/themas/{{thema-naam}}/{{subthema-naam}} | alle tekstjes uit een bepaald thema  |   |
    
## statische pagina's
| url | bedoeling | verantwoordelijke module |
|---|---|---|
|/wegwijs | wijgwijs doorheen deze brochure | WegwijsPageModule |
|/crisis-en-noodsituaties | CRISIS- EN NOODSITUATIES | NoodsituatiePageModule |
|/veilige-activiteit | Een veilige activiteit | ActiviteitPageModule | 
|/verzekeringen-en-aansprakelijkheid | Verzekeringen en aansprakelijkheid bij activiteiten | VerzekeringenPageModule |