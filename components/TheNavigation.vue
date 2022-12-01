<template lang="pug">
nav.navigation 
	.navigation__wrapper 
		NuxtLink.navigation__link(to="/")
			Logo
			
		ul.navigation__list 
			li.navigation__list__item
				NuxtLink.navigation__list__link.underline-animation(to="/collections") Collections
			li.navigation__list__item
				NuxtLink.navigation__list__link.underline-animation(to="/about") About
</template>
