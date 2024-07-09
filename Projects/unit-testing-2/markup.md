---
title: App
markmap:
  colorFreezeLevel: 25
---
#  App

## RootRoute [/]

### Header [/]

  #### Link
  #### SearchBar
  ##### ==Input (reusable Comp.)==
  - ==Label (reusable Comp.)==

  #### AuthButtons  *<-----useUser()*
  
### Outlet [/]

  #### HomeRoute [/]
  ##### Hero
  ##### RepositoriesTable *<-----useRepositories()*

  #### TestRoute [/test]

  #### SignUpRoute [/signup]
  ##### SignUpForm *<-----useSignUp()*
  ###### ==Input(reusable Comp.)==
  - ==Label (reusable Comp.)==
  ###### ==Checkbox(reusable Comp.)==
  ###### ==Button(reusable Comp.)==
  ###### ==FormError(reusable Comp.)==

  #### SignInRoute [/signin]
  ##### SignInForm *<-----useSignIn()*
  ###### ==Input(reusable Comp.)==
  - ==Label (reusable Comp.)==
  ###### ==Button(reusable Comp.)==
  ###### ==FormError(reusable Comp.)==

  #### SignOutRoute [/signout] *<-----useSignOut*

  #### RepositoriesSearchRoute [/repositories] *<-----useRepositories*
  - RepositoriesListItem
    - RepositoriesSummary
    - FileIcon

  #### EditorRoute [/repositories/:owner/:repoName/*]
  ##### Split
  ###### TreePanel *<-----useEntry()*
  - ==TreeEntry (reusable Comp.)==
    - Folder *<-----useEntry()*
      - ==TreeEntry (reusable Comp.)==
    - File
      - FileIcon
  

  ###### EditorPanel
  - Breadcrumbs
  - Editor
  - ExplanationList `createPortal`
    - ExplanationPanel/Pop *<-----useExplanation* 

  #### NotFoundRoute [/*]


