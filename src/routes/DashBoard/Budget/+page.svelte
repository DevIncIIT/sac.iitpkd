<script lang="ts">
    import DoughnutChart from "../../../lib/components/DoughnutChart.svelte";

    const total_expense = 1000;
    const exp = {
        Food: {amount: 200},
        judges : {amount: 200},
        professors: {amount: 50},
        travel: {amount: 300},
        supplies: {amount: 100},
        merch: {amount: 150}

    }
	const expenses = [
		{name:'Food', amount : 400, index:0},
		{name:'Judges', amount : 200, index:1},
		{name:'Professors', amount : 200, index:2},
		{name:'Travel', amount : 600, index:3},
		{name:'Supplies', amount : 100, index:4},
		{name:'Merch', amount : 150, index:5},
		
	];

	const councils = [
        {name: 'Total Budget', budget: 25000, spent: 10000 },
        {name: 'Hostel Council', budget: 1000, spent: 0 },
        {name: 'Technical Council', budget: 10000, spent: 5000 },
        {name: 'Cultural Council', budget: 5000, spent: 10000},
        {name: 'Academic Council', budget: 1000, spent: 0 },
	];

	const totalBudget = 25000;
	const total_spent = 10000;
    const total_expenses = 5000;

    function getColorWithAlpha(index: number, alpha: number): string {
        const colors = ['#dd3cdd', '#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#FFC107'];
        const color = colors[index % 6]; // Get the color based on the index
        return `${hexToRgba(color, alpha)}`; // Add alpha 0.8
    }

    // Helper function to convert hex to rgba with alpha
    function hexToRgba(hex: string, alpha: number): string {
        let r = 0, g = 0, b = 0;
        // 3 digits
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // 6 digits
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    
</script>

<div class = 'dashboard grid md:grid-cols-2 gap-6 p-6'>
	<!-- left upper part  -->
	<div class = 'p-6'>
        
		<div class="council-card border rounded-xl mb-5">
            <div class="flex justify-between items-center">
                <h2 class = "section-title">Garba celebration</h2>
                <button class="text-sm font-semibold text-gray-700 rounded-[20%] px-4 py-2"
                style="background-color:#00000010"> Statistics</button>
            </div>
            <div class="w-full flex justify-center items-center">
                <div class="center">
                    <DoughnutChart totalBudget={total_expense} dictOfExpenses={exp}>
                        <div class="flex justify-center items-center flex-col">
                            <span class="text-sm">Expense</span>
                            <h1 class="font-bold text-xl">${total_expense}</h1>
                        </div>
                    </DoughnutChart>
                </div>
            </div>            
            <div class="flex flex-wrap justify-center items-center gap-4">
                {#each expenses.slice(0,3) as expense, index}
                    <div class="flex items-center space-x-3 px-4 py-2 mr-1" 
                         style="background-color: {getColorWithAlpha(index, 0.05)}; border-radius: 9999px; height: 50px;">
                        <!-- Circular dot -->
                        <div class="w-3 h-3 rounded-full" style="background-color: {getColorWithAlpha(index, 1)};"></div>
                        
                        <!-- Expense details -->
                        <div class="flex flex-col justify-center">
                            <span class="text-sm font-medium text-gray-700">{expense.name}</span>
                            <span class="text-sm font-medium text-gray-600">${expense.amount.toLocaleString()}</span>
                        </div>
                    </div>
                {/each}
            </div>

        </div>

    <!-- left bottom part -->
        <div class="council-card p-6 border rounded-xl space-y-4 mb-4">
            {#each expenses as expense}
                <!-- 1. Type and Expense -->
                <div class="flex justify-between items-center p-2">
                    <span class="text-sm font-medium text-gray-700">{expense.name}</span>
                    <span class="text-sm font-medium text-gray-700">Expense: ${expense.amount.toFixed(2)}</span>
                    </div>

                    <!-- 2. Progress Bar (based on expense/total_expense) -->
                    <div class="w-full h-6 bg-gray-200 rounded-full overflow-hidden"
                        style="background-color: {['#3DB9FF', '#8A2900', '#04009F', '#008234', '#9747FF', '#FFC107'][expense.index % 6]}10;">
                    <div class="h-full rounded-full transition-all duration-300"
                        style="width: {Math.min(100, (expense.amount / total_expense) * 100)}%; 
                                background-color: {['#3DB9FF','#8A2900', '#04009F', '#008234', '#9747FF', '#FFC107'][expense.index % 6]};">
                    </div>
                </div>
            {/each}

        </div>
	</div>
    <!-- right part -->
    <div class="p-6">
        
        {#each councils as council}
        <div class="council-card p-4 border rounded-2xl space-y-5">
            
            <div class="flex justify-between items-center">
                <h3>{council.name}</h3>
                <span class="text-gray-500">⋮</span>
            </div>

            <div class="flex justify-between items-center">
                <h2>${council.budget}</h2>
                <p class="text-gray-500"
                style="color :{(council.budget - council.spent < 0) ? '#FF5F5F' : '#000000'}; ">
                    {((council.spent / council.budget) * 100 > 100 
                        ? ((council.spent / council.budget) * 100 - 100) * -1 
                        : (council.spent / council.budget) * 100
                    ).toFixed(0)}%
                </p>
                
            </div>

            <div class="w-full h-2 bg-gray-300 rounded-full overflow-hidden"
            style="background-color: {(council.spent == 0) ? '#f4a460' : (council.budget - council.spent < 0) ? '#FF5F5F' : '#030072'}15;">
                <div class="h-full rounded-full transition-all duration-300" 
                    style="width: {Math.min(100, (council.spent / council.budget) * 100)}%; 
                            background-color: {(council.budget - council.spent < 0) ? '#FF5F5F' : '#030072'};">
                </div>
            </div>

            <div class="flex justify-between text-sm text-gray-700">
                <span class="font-normal">-${council.spent.toFixed(2)} spent</span>
                <span class="font-semibold"
                style="color :{(council.budget - council.spent < 0) ? '#FF5F5F' : '#000000'}; ">
                    {(council.budget - council.spent < 0) 
                    ? `$${(council.spent - council.budget).toFixed(2)} overspending`
                    : `$${(council.budget - council.spent).toFixed(2)} left`}
                </span>
            </div>

        </div>
        {/each}

    </div>
    

    
    
</div>

<style>
    /* main styling */
    .dashboard{
        display: grid;
        gap: 1.5rem;
    }

    .section-card {
        background-color: #f9a75f;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        
    }
    .section-card1 {
        background-color: #ffffff;

        /* border-radius: 0.75rem; */
        /* box-shadow: 0 4px 6px rgba(0,0,0,0.1); */
    }

    /* section headers */
    .section-title{
        font-size: 1.25rem;
        font-weight: 600;
        color: #33373e;
        margin-bottom: 1rem;
    }

    .section-expense{
        font-size: 2rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1.5rem;
    }
    .section-total {
        font-size: 2rem;
        font-weight: 700;
        color: #1f2937;
    }

    .section-summary {
        font-size: 0.875rem;
        color: #6b7280;
        margin-bottom: 1.5rem;
    }

    /* circular stat */
   

    .stats-circle{
        width: 6rem;
        height: 6rem;
        background-color: #f3f4f6;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        color: #a8aeb9;
        margin: 1.5rem auto;
    }

    /* expense items */
    .expense-items{
        margin-top: 1rem;

    }
    .expense-item {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: #495260;
        margin-bottom: 0.5rem;
    }

    .color-dot{
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }

    .food-dot{background-color: #6b0505;}
    .health-dot{background-color: #e02121;}
    .transport-dot{background-color: #92cc35;}

    .expense-bar-container{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .expense-name {
        flex: 1;
        color: #212227;
    }

    .expense-amount{
        color: #212227;
        font-weight: 400;
    }

    .progress-bar{
        flex: 1;
        height: 0.5rem;
        background-color: #e5e7eb;
        border-radius: 0.25rem;
        overflow: hidden;
        margin-left: 0.5rem;
    }
    .progress-fill {
        height: 100%;
        border-radius: 0.25rem;
    }

    .expense-food { background-color: #3b82f6; }
    .expense-judges { background-color: #ef4444; }
    .expense-professors { background-color: #8b5cf6; }
    .expense-travel { background-color: #10b981; }
    .expense-supplies { background-color: #ec4899; }
    .expense-merch { background-color: #6366f1; }

    .council-card{
        background-color: #FFE5D7;
        padding: 1rem;
        margin: 15px 5px;
        color: #1f2221;
    }

    .council-card h2 {
        font-weight: 700;
        font-size: 1.6rem;
    }

    .council-card h3 {
        font-weight: 500;
        font-size: 1.2rem;
    }

    .council-card p {
        font-weight: 400;
        font-size: 0.93rem;
    }

    .council-budget{
        font-size: 0.875rem;
        color: #1f2221;
    }

    .council-spent{
        font-size: 0.875rem;
        font-weight: 500;
    }

    .normal-fill{
        background-color: #408548;
    }

    .overspend-fill{
        background-color: #ad3434;

    }
</style>
