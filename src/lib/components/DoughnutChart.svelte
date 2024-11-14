<script lang="ts">
    import { onMount } from 'svelte';

    export let totalBudget: number;
    export let dictOfExpenses: Record<string, { [key: string]: any }>;
    export let listOfColors: string[] = [];
    export let width: number = 250;
    export let height: number = 250;

    const defaultColors: string[] = ["#4caf50", "#3f51b5", "#795548", "#ff9800", "#2196f3", "#9c27b0", "#f44336", "#607d8b"];

    interface ChartDataItem {
        percentage: number;
        color: string;
    }

    let chartData: ChartDataItem[] = [];
    let svgElementId: string = "doughnutChart";

    function calculateChartData(): void {
        const colors = listOfColors.length ? listOfColors : defaultColors;
        let colorIndex = 0;

        chartData = Object.keys(dictOfExpenses).map((expenseName) => {
            const expense = dictOfExpenses[expenseName];
            const percentage = (expense.amount / totalBudget) * 100;

            const color = colors[colorIndex % colors.length];
            colorIndex++;

            return { percentage, color };
        });
    }

    function createDoughnutChart(): void {
        if (typeof document === "undefined") return;

        const svg = document.getElementById(svgElementId) as SVGElement | null;
        if (!svg) return;

        const radius = 15.9;
        const circumference = 2 * Math.PI * radius;
        let offset = 0;

        svg.innerHTML = '';

        chartData.forEach((item) => {
            const segment = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            const strokeDasharray = `${((item.percentage - 2.5) / 100) * circumference} ${circumference}`;

            segment.setAttribute("r", radius.toString());
            segment.setAttribute("cx", "21");
            segment.setAttribute("cy", "21");
            segment.setAttribute("stroke", item.color);
            segment.setAttribute("stroke-width", "2");
            segment.setAttribute("stroke-linecap", "round");
            segment.setAttribute("fill", "none");
            segment.setAttribute("stroke-dasharray", strokeDasharray);
            segment.setAttribute("stroke-dashoffset", offset.toString());

            svg.appendChild(segment);
            offset -= item.percentage;
        });
    }

    onMount(() => {
        calculateChartData();
        createDoughnutChart();
    });

    $: if (totalBudget && dictOfExpenses) {
        calculateChartData();
        createDoughnutChart();
    }
</script>

<style>
    .chart-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .doughnut-chart {
        transform: rotate(-90deg);
    }

    .slot-content {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="chart-container" style="width: {width}px; height: {height}px;">
    <svg id="{svgElementId}" width="{width}" height="{height}" viewBox="0 0 42 42" class="doughnut-chart"></svg>
    <div class="slot-content">
        <slot></slot>
    </div>
</div>
