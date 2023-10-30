# Modpack Patch Notes: Version 2.3.0 [Quest Overhaul]
**Release Date**: November 1st, 2023

In the forthcoming update, we will be addressing all quest-related concerns, introducing new quests, and enhancing the challenge levels of the Wither and Ender Dragon. Additionally, this update will encompass refinements to the existing mods and requisite adjustments to the KubeJS code to ensure seamless integration with the Create Mod.
### As a standard safety protocol, we advise creating a backup of your saved data prior to updating the modification package to ensure the preservation of your progress.
## New Additions
- [Command Config Lib](https://modrinth.com/mod/command-config): Command-based config library for clients and servers
- [Ender Dragon Fight Remastered](https://modrinth.com/datapack/edf-remastered): An up in difficulty for Minecraft's final boss. With more health and more attacks, the fight finally feels like the final confrontation.
- [BE Style Wither](https://modrinth.com/mod/be-style-wither): Brings the behavior of Wither closer to Bedrock Edition
- [EMI](https://modrinth.com/mod/emi): A featureful and accessible item and recipe viewer
- [EMI Trades](https://modrinth.com/mod/emitrades): Villager trading for EMI.
- [EMI Loot](https://modrinth.com/mod/emi-loot): A loot drop (chest, block, entity) plugin for the EMI Recipe and Item viewer.
- [EMIffect](https://modrinth.com/mod/emiffect): EMI addon that appends status effects in EMI and provides information about each status effect.
- [EMI Addon: Extra Mod Integrations](https://modrinth.com/mod/extra-mod-integrations): EMI addon adding support for as many mods as possible
- [Just Enough Items](https://modrinth.com/mod/jei): JEI - View Items and Recipes 
- [Just Enough Resources (JER)](https://modrinth.com/mod/just-enough-resources-jer): JEI integration that adds info on mobs, world gen, villagers and many more!
- [Just Enough Professions (JEP)](https://modrinth.com/mod/just-enough-professions-jep): A JEI addon that adds profession workstations
- [Just Enough Effect Descriptions (JEED)](https://modrinth.com/mod/just-enough-effect-descriptions-jeed): JEI plugin that displays information on all status effects
- [Just Enough Breeding (JEBr)](https://modrinth.com/mod/justenoughbreeding): JEI plugin that displays breeding information
- [Just Enough Sculk Sensor](https://www.curseforge.com/minecraft/mc-mods/just-enough-sculk-sensor): This mod add a new category in JEI to display the differents vibrations frequencies.
- [ProbeJS](https://www.curseforge.com/minecraft/mc-mods/probejs): A typing generator mod to generate KubeJS typings. Enabling Intellisense for your KubeJS environments!
## Mod Adjustments
- [Reinforced Barrels adjusted by M0nkeyPr0grammer](https://github.com/M0nkeyPr0grammer/reinforced-barrels): Upgraded Netherite barrel to 144 slots, rather than 108 slots
- [Reinforced Chests adjusted by M0nkeyPr0grammer](https://github.com/M0nkeyPr0grammer/reinforced-chests): Upgraded Netherite chest to 144 slots and 288 double variant slots, rather than 108 slots and 216
- [Reinforced Shulkerboxes adjusted by M0nkeyPr0grammer](https://github.com/M0nkeyPr0grammer/reinforced-shulker-boxes): Upgraded Netherite shulkerbox to 144 slots, rather than 108 slots
## Removals
- RoughlyEnoughItems: Frequent bugginess affecting the overall player experience
- RoughlyEnoughProfession: Removed RoughlyEnoughItems (REI)
- CreateFabric&REIBugFix: Removed RoughlyEnoughItems (REI)
## Updates
- Ambient Sounds: v5.2.22 > v5.2.24
- Better Statistics: v3.4 > v3.5
- BetterTrims: v2.0.1 > v2.0.4
- Collective: v6.66 > v6.72
- CreativeCore: v2.11.5 > v2.11.7
- Eating Animation: v1.9.4 > v1.9.5
- ETF: v4.5.1 > v4.6
- Extreme Sound Muffler: v3.39 > v3.40
- Fabric API: v0.90.0 > v0.90.4
- Ferritcore: v6.0.0 > v6.0.1
- Geckolib: v4.2.2 > v4.2.4
- Incendium: v5.3.2 > v5.3.3
- KubeJS: v2001.6.3-build.73 > v2001.6.3-build.80
- Modern Fix: v5.8.1 > v5.9.0
- Moonlight: v2.8.51 > v2.8.53
- MoreArmorTrims: v1.1.1 > v1.1.2
- MoreChestVariants: v1.4.1 > v1.5.0
- Polymer: v0.5.16 > v0.5.18
- Polymorph: v0.49.0 > v0.49.1
- PuzzlesLib: v8.0.24 > v8.1.5
- Repurposed Structures: v7.1.9 > v7.1.11
- Resourceful Lib: v2.1.11 > v2.1.13
- Server Core: v1.3.7 > v1.3.9
- Supplementaries: v2.6.14 > v2.6.18
- Terralith: v2.4.7 > v2.4.8
- Xaero's Minimap: v23.8.3 > v23.8.4
- Xaero's World Map: v1.35.0 > v1.36.0
## Quest Updates
- Fixed all incomplete/ broken quests
## Quest Additions
- Create Chapter: Added Blaze Cake creation steps, and setting up your first train
- Create Addons: Added in a brief overview of all the create addons
- Create Foundry Chapter: Added all molten ores and steps on how to make them
- Chipped Tables Chapter: Added in all Chipped workbenches to help players with decoration lead
- Create Addons Chapter: Added in simple quests to help show off the Create Addons items
- Creative Create Items Chapter: Added in steps on how to make the two current Creative items, and added placeholders for future items.
## Drippy Screen Tweaks
- Updated Version ID to v2.3.0
## KubeJS Tweaks
- kubejs\client_scripts\LandscapesReimagined_ClientTweaks: Hid Creative only items
- kubejs\server_scrips\LandscapesReimagined_ServerTweaks: Removed 2 Create Foundry recipes, fixed in another script. Removed 2 Simple Villager items due to being broken or overpowered, Trading Block and Iron Farm Block
- kubejs\server_scripts\CreateFoundryTweaks: Fixed Create Foundry Ore to Molten Recipes for Redstone and Lapis
- kubejs\server_scrips\OreTweaks: Added in crushing recipes for Salt Bucket and Aurora Crystals
- kubejs\client_scripts: Removed REI Groups and REI RemovalsandAdditons because pack is switching to EMI/JEI
- kubejs\server_scripts\Armor_Tools_Crushing: Separated into two scripts Armor_Crushing_Recipes and Tool_Crushing_Recipes
- kubejs\server_scripts\Armor_Crushing_Recipes: Added Advanced Netherite Armor Crushing recipes
- kubejs\server_scrips\Tool_Crushing_Recipes: Added Advanced Netherite Tool Crushing recipes
- kubejs\server_scrips\Mod_RecipeFixes: Fixed broken recipes
- kubejs\assets\emi: Hides specific items
## Config Tweaks
- Completionist Index: Moved Index to Pause Menu
- Patchouli Button: Moved to Completionist Index previous spot
### Note: If you encounter any issues, please request support on our [Discord](https://discord.gg/quenZthXgy). Enjoy the update!
## Want to Read More about what was changed check out this [Github Merge](https://github.com/M0nkeyPr0grammer/Landscapes-Reimagined/commit/f1639d568cc7ae52b94dea5b64e0e8cd0de026bb)
### Want to setup a server using our official server host, click the banner below!
[![BisectHosting Code](https://raw.githubusercontent.com/M0nkeyPr0grammer/Landscapes-Reimagined/main/BH_Landscape_reimagined.png)](https://bisecthosting.com/landscapes_reimagined?r=modrinth+chanelog)
