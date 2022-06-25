# WideSheet

### Purpose

This is a tool to handle displaying data sets such as tables and spreadsheets, particularly when the data rows are very wide. In applications such as Excel, phpMyAdmin and even Notion, when rows have enough data columns, users are forced to scroll left and right to view all the row's content.

This app aims to solve this issue in multiple ways:

1. The first solution is for rows to use more than one line of text. Data on adjacent rows will be lined up o show they are still on the same data field of the row.
2. The second solution is to allow certain data fields to be displayed as icons, instead of as text. Users can still edit the field as text, but the app will normally show it as an icon. For example, a yes or no field can be shown as a green or red ball. Or, if a numeric value has a specific range, it can be shown as a pie chart showing 0 to 100%.
3. Certain data sets can be displayed as a combined listing, even when they are really separate columns. For example, an address may consist of a street number, street name, city, state code & zip code. This can be displayed as a single field following a format, but edited as individual fields.
4. Some columns can be displayed in a simplified form, but can be expanded when moused over or clicked on. For example, a large number will be displayed in exponential form, until moused over to show the actual value. Or, a description will be kept small, until moused over, where the full description can be shown.
5. Data rows can be clumped together based on shared fields. For example, if two records are referencing the same person, they can be listed together

We may come up with other ways to support a compact way to display data

Some example records

Field wave count gems mode Player Level Result Last wave Skills BattleTraits Rage Start Notes
S4 20 Critical Hit, ManaGain, AntiArmor Endurance 73 33774 44 ManaStream:25, Forge:10, Resonance:10 OverCrowd:12, Haste:12 G2: 1-5, G1: 7-11 G3 gem in existing tower Using rage is hard; by the time you're falling behind, it's too late to adjust it

As you can see, this one data row is too large to fit on a single screen. Let's see if we can organize it a bit better

![example image](/ExampleContent.png)

This is only two rows of data, but I think it looks a lot cleaner than a normal table
