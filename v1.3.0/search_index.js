var documenterSearchIndex = {"docs":
[{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"EditURL = \"https://github.com/jw3126/UnitfulRecipes.jl/blob/master/docs/lit/examples/1_Examples.jl\"","category":"page"},{"location":"examples/1_Examples/#_Examples-1","page":"Simple Examples","title":"Simple Examples","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"(Image: ) (Image: )","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"note: Note\nThese examples are available as Jupyter notebooks. You can execute them online with binder or just view them with nbviewer by clicking on the badges above!","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"These examples show what UnitfulRecipes is all about.","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"First we need to tell Julia we are using Plots, Unitful, and UnitfulRecipes","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"using Plots, Unitful, UnitfulRecipes","category":"page"},{"location":"examples/1_Examples/#Simplest-plot-1","page":"Simple Examples","title":"Simplest plot","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"This is the most basic example","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"y = randn(10)*u\"kg\"\nplot(y)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"Add some more plots, and it will be aware of the units you used previously (note y2 is about 10 times smaller than y1)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"y2 = 100randn(10)*u\"g\"\nplot!(y2)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"UnitfulRecipes will not allow you to plot with different unit-dimensions, so","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot!(rand(10)*u\"m\")","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"won't work here.","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"But you can add inset subplots with different axes that have different dimensions","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot!(rand(10)*u\"m\", inset=bbox(0.5, 0.5, 0.3, 0.3), subplot=2)","category":"page"},{"location":"examples/1_Examples/#Axis-label-1","page":"Simple Examples","title":"Axis label","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"If you specify an axis label, the unit will be appended to it.","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot(y, ylabel=\"mass\")","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"Unless you want it untouched, in which case you can use a \"protected\" string using the @P_str macro.","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot(y, ylabel=P\"mass in kilograms\")","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"Just like with the label keyword for legends, no axis label is added if you specify the axis label to be an empty string.","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot(y, ylabel=\"\")","category":"page"},{"location":"examples/1_Examples/#Unit-formatting-1","page":"Simple Examples","title":"Unit formatting","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"If you prefer some other formatting over the round parentheses, you can supply a keyword unitformat, which can be a number of different things:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"unitformat can be a boolean or nothing:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot([plot(y, ylab=\"mass\", title=repr(s), unitformat=s) for s in (nothing, true, false)]...)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"unitformat can be one of a number of predefined symbols, defined in","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"URsymbols = keys(UnitfulRecipes.UNIT_FORMATS)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"which correspond to these unit formats:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot([plot(y, ylab=\"mass\", title=repr(s), unitformat=s) for s in URsymbols]...)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"unitformat can also be a Char, a String, or a Tuple (of Chars or Strings), which will be inserted around the label and unit depending on the length of the tuple:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"URtuples = [\", in \", (\", in (\", \")\"), (\"[\", \"] = (\", \")\"), ':', ('$', '$'), (':', ':', ':')]\nplot([plot(y, ylab=\"mass\", title=repr(s), unitformat=s) for s in URtuples]...)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"For extreme customizability, you can also supply a function that turns two arguments (label, unit) into a string:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"formatter(l, u) = string(\"\\$\\\\frac{\\\\textrm{\", l, \"}}{\\\\mathrm{\", u, \"}}\\$\")\nplot(y, ylab=\"mass\", unitformat=formatter)","category":"page"},{"location":"examples/1_Examples/#Axis-unit-1","page":"Simple Examples","title":"Axis unit","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"You can use the axis-specific keyword arguments to convert units on the fly","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot(y, yunit=u\"g\")","category":"page"},{"location":"examples/1_Examples/#Axis-limits-and-ticks-1","page":"Simple Examples","title":"Axis limits and ticks","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"Setting the axis limits and ticks can be done with units","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"x = (1:length(y)) * u\"μs\"\nplot(x, y, ylims=(-1000u\"g\",2000u\"g\"), xticks = x[[1,end]])","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"or without","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"plot(x, y, ylims=(-1,2), xticks=1:3:length(x))","category":"page"},{"location":"examples/1_Examples/#Multiple-series-1","page":"Simple Examples","title":"Multiple series","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"You can plot multiple series as 2D arrays","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"x, y = rand(10,3)*u\"m\", rand(10,3)*u\"g\"\nplot(x, y)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"Or vectors of vectors (of potnetially different lengths)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"x, y = [rand(10), rand(15), rand(20)]*u\"m\", [rand(10), rand(15), rand(20)]*u\"g\"\nplot(x, y)","category":"page"},{"location":"examples/1_Examples/#D-1","page":"Simple Examples","title":"3D","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"It works in 3D","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"x, y = rand(10)*u\"km\", rand(10)*u\"hr\"\nz = x ./ y\nplot(x, y, z)","category":"page"},{"location":"examples/1_Examples/#Scatter-plots-1","page":"Simple Examples","title":"Scatter plots","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"You can do scatter plots","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"scatter(x, y, zcolor=z, clims=(5,20).*unit(eltype(z)))","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"and 3D scatter plots too","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"scatter(x, y, z, zcolor=z)","category":"page"},{"location":"examples/1_Examples/#Contour-plots-1","page":"Simple Examples","title":"Contour plots","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"for contours plots","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"x, y = (1:0.01:2)*u\"m\", (1:0.02:2)*u\"s\"\nz = x' ./ y\ncontour(x, y, z)","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"and filled contours","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"contourf(x, y, z)","category":"page"},{"location":"examples/1_Examples/#Error-bars-1","page":"Simple Examples","title":"Error bars","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"For example, you can use the yerror keyword argument with units, which will be converted to the units of y and plot your errorbars:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"using Unitful: GeV, MeV, c\nx = (1.0:0.1:10) * GeV/c\ny = @. (2 + sin(x / (GeV/c))) * 0.4GeV/c^2 # a sine to make it pretty\nyerror = 10.9MeV/c^2 * exp.(randn(length(x))) # some noise for pretty again\nplot(x, y; yerror, title=\"My unitful data with yerror bars\", lab=\"\")","category":"page"},{"location":"examples/1_Examples/#Functions-1","page":"Simple Examples","title":"Functions","text":"","category":"section"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"In order to plot a unitful function on a unitful axis, supply as a second argument a vector of unitful sample points, or the unit for the independent axis:","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"model(x) = 1u\"V\"*exp(-((x-0.5u\"s\")/0.7u\"s\")^2)\nt = randn(10)u\"s\" # Sample points\nU = model.(t) + randn(10)u\"dV\" .|> u\"V\" # Noisy acquicisions\nplot(t, U; xlabel=\"t\", ylabel=\"U\", st=:scatter, label=\"Samples\")\nplot!(model, t; st=:scatter, label=\"Noise removed\")\nplot!(model, u\"s\"; label=\"True function\")","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"","category":"page"},{"location":"examples/1_Examples/#","page":"Simple Examples","title":"Simple Examples","text":"This page was generated using Literate.jl.","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"EditURL = \"https://github.com/jw3126/UnitfulRecipes.jl/blob/master/docs/lit/examples/2_Plots.jl\"","category":"page"},{"location":"examples/2_Plots/#_Plots-1","page":"Plots.jl examples","title":"Plots.jl examples","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"(Image: ) (Image: )","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"note: Note\nThese examples are available as Jupyter notebooks. You can execute them online with binder or just view them with nbviewer by clicking on the badges above!","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"These examples were slightly modified from some of the GR examples in the Plots.jl documentation and can be used as both a tutorial or as a series of test for the UnitfulRecipes package (they are essentially the same except we have added some units to the data).","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"First we need to tell Julia we are using Plots, Unitful, and UnitfulRecipes","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"using Plots, Unitful, UnitfulRecipes","category":"page"},{"location":"examples/2_Plots/#Lines-1","page":"Plots.jl examples","title":"Lines","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"plot(Plots.fakedata(50, 5) * u\"m\", w=3)","category":"page"},{"location":"examples/2_Plots/#Parametric-plots-1","page":"Plots.jl examples","title":"Parametric plots","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"plot(t -> sin(t)*u\"s\", t -> sin(2t)*u\"m\", 0, 2π, line=4, leg=false, fill=(0, :orange))","category":"page"},{"location":"examples/2_Plots/#Colors-1","page":"Plots.jl examples","title":"Colors","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"y = rand(100)*u\"km\"\nplot((0:10:100)*u\"hr\", rand(11, 4)*u\"km\", lab=\"lines\", w=3, palette=:grays, fill=0, α=0.6)\nscatter!(y, zcolor=abs.(y .- 0.5u\"km\"), m=(:heat, 0.8, Plots.stroke(1, :green)), ms=10 * abs.(y .- 0.5u\"km\") .+ 4u\"km\", lab=\"grad\")","category":"page"},{"location":"examples/2_Plots/#Global-1","page":"Plots.jl examples","title":"Global","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"Note that a few changes had to be made for this to work.","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"using Statistics\ny = rand(20, 3)*u\"W\"\nx = (1:size(y,1))*u\"Hz\"\nplot(x, y, xlabel=\"XLABEL\", xlims=(-5, 30), xflip=true, xticks=0:2:20, background_color=RGB(0.2, 0.2, 0.2), leg=false)\nhline!(mean(y, dims=1) + rand(1, 3)*u\"W\", line=(4, :dash, 0.6, [:lightgreen :green :darkgreen]))\nvline!([5, 10]*u\"Hz\")\ntitle!(\"TITLE\")\nyaxis!(\"YLABEL\", :log10)","category":"page"},{"location":"examples/2_Plots/#Arguments-1","page":"Plots.jl examples","title":"Arguments","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"ys = Vector[rand(10), rand(20)] .* u\"km\"\nplot(ys, color=[:black :orange], line=(:dot, 4), marker=([:hex :d], 12, 0.8, Plots.stroke(3, :gray)))","category":"page"},{"location":"examples/2_Plots/#Build-plot-in-pieces-1","page":"Plots.jl examples","title":"Build plot in pieces","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"plot(rand(100) / 3 * u\"km\", reg=true, fill=(0, :green))\nscatter!(rand(100) * u\"km\", markersize=6, c=:orange)","category":"page"},{"location":"examples/2_Plots/#Histogram2D-1","page":"Plots.jl examples","title":"Histogram2D","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"histogram2d(randn(10000) * u\"cm\", randn(10000) * u\"cm\", nbins=20)","category":"page"},{"location":"examples/2_Plots/#Line-types-1","page":"Plots.jl examples","title":"Line types","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"linetypes = [:path :steppre :steppost :sticks :scatter]\nn = length(linetypes)\nx = Vector[sort(rand(20)) for i = 1:n] * u\"km\"\ny = rand(20, n) * u\"ms\"\nplot(x, y, line=(linetypes, 3), lab=map(string, linetypes), ms=15)","category":"page"},{"location":"examples/2_Plots/#Line-styles-1","page":"Plots.jl examples","title":"Line styles","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"styles = intersect([:solid, :dash, :dot, :dashdot, :dashdotdot], Plots.supported_styles())\nstyles = reshape(styles, 1, length(styles))\nn = length(styles)\ny = cumsum(randn(20, n), dims=1) * u\"km\"\nplot(y, line=(5, styles), label=map(string, styles), legendtitle=\"linestyle\")","category":"page"},{"location":"examples/2_Plots/#Marker-types-1","page":"Plots.jl examples","title":"Marker types","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"markers = intersect(Plots._shape_keys, Plots.supported_markers())\nmarkers = reshape(markers, 1, length(markers))\nn = length(markers)\nx = (range(0, stop=10, length=n + 2))[2:end - 1] * u\"km\"\ny = repeat(reshape(reverse(x), 1, :), n, 1)\nscatter(x, y, m=(8, :auto), lab=map(string, markers), bg=:linen, xlim=(0, 10), ylim=(0, 10))","category":"page"},{"location":"examples/2_Plots/#Bar-1","page":"Plots.jl examples","title":"Bar","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"bar(randn(99) * u\"km\")","category":"page"},{"location":"examples/2_Plots/#Histogram-1","page":"Plots.jl examples","title":"Histogram","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"histogram(randn(1000) * u\"km\", bins=:scott, weights=repeat(1:5, outer=200))","category":"page"},{"location":"examples/2_Plots/#Subplots-1","page":"Plots.jl examples","title":"Subplots","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"l = @layout([a{0.1h};b [c;d e]])\nplot(randn(100, 5) * u\"km\", layout=l, t=[:line :histogram :scatter :steppre :bar], leg=false, ticks=nothing, border=:none)","category":"page"},{"location":"examples/2_Plots/#Adding-to-subplots-1","page":"Plots.jl examples","title":"Adding to subplots","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"plot(Plots.fakedata(100, 10) * u\"km\", layout=4, palette=[:grays :blues :heat :lightrainbow], bg_inside=[:orange :pink :darkblue :black])","category":"page"},{"location":"examples/2_Plots/#Contour-plots-1","page":"Plots.jl examples","title":"Contour plots","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"x = (1:0.05:10) * u\"m\"\ny = (1:0.01:2) * u\"s\"\nf(x,y) = x^2 / y\nz = f.(x',y)\np1 = contour(x, y, f, fill=true)\np2 = contour(x, y, z)\np3 = contourf(x, y, z)\nplot(p1, p2, p3)","category":"page"},{"location":"examples/2_Plots/#D-1","page":"Plots.jl examples","title":"3D","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"n = 100\nts = range(0, stop=8π, length=n) * u\"rad\"\nx = @. ts * cos(ts)\ny = @. 0.1ts * sin(ts)\nz = ts\nplot(x, y, z, zcolor=reverse(z), m=(10, 0.8, :blues, Plots.stroke(0)), leg=false, cbar=true, w=5, xlabel=\"x\", ylabel=\"y\", zlabel=\"z\")\nplot!(zeros(n), zeros(n), z, w=5)","category":"page"},{"location":"examples/2_Plots/#Groups-and-Subplots-1","page":"Plots.jl examples","title":"Groups and Subplots","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"group = rand(map((i->\"group $(i)\"), 1:4), 100)\nplot(rand(100)*u\"km\", layout=@layout([a b;c]), group=group, linetype=[:bar :scatter :steppre], linecolor=:match)","category":"page"},{"location":"examples/2_Plots/#Heatmap,-categorical-axes,-and-aspect_ratio-1","page":"Plots.jl examples","title":"Heatmap, categorical axes, and aspect_ratio","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"xs = [string(\"x\", i) for i = 1:10]\nys = [string(\"y\", i) for i = 1:4]\nz = float((1:4) * reshape(1:10, 1, :)) * u\"km\"\nheatmap(xs, ys, z, aspect_ratio=1)","category":"page"},{"location":"examples/2_Plots/#Magic-grid-argument-1","page":"Plots.jl examples","title":"Magic grid argument","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"x = rand(10) * u\"km\"\np1 = plot(x, title=\"Default looks\")\np2 = plot(x, grid=(:y, :olivedrab, :dot, 1, 0.9), title=\"Modified y grid\")\np3 = plot(deepcopy(p2), title=\"Add x grid\")\nxgrid!(p3, :on, :cadetblue, 2, :dashdot, 0.4)\nplot(p1, p2, p3, layout=(1, 3), label=\"\", fillrange=0, fillalpha=0.3)","category":"page"},{"location":"examples/2_Plots/#Framestyle-1","page":"Plots.jl examples","title":"Framestyle","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"Suggestion: we might want to not add the unit label when the axis is not shown?","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"scatter(fill(randn(10), 6) * u\"m\", fill(randn(10), 6) * u\"s\", framestyle=[:box :semi :origin :zerolines :grid :none], title=[\":box\" \":semi\" \":origin\" \":zerolines\" \":grid\" \":none\"], color=permutedims(1:6), layout=6, label=\"\", markerstrokewidth=0, ticks=-2:2)","category":"page"},{"location":"examples/2_Plots/#Lines-and-markers-with-varying-colors-1","page":"Plots.jl examples","title":"Lines and markers with varying colors","text":"","category":"section"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"note that marker_z as a function did not work so it is modified here","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"t = range(0, stop=1, length=100) * u\"s\"\nθ = 6π * u\"rad/s\" * t\nx = @. t * cos(θ)\ny = @. t * sin(θ)\nz = x + y\np1 = plot(x, y, line_z=t, linewidth=3, legend=false)\np2 = scatter(x, y, marker_z=z, color=:bluesreds, legend=false)\nplot(p1, p2)","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"","category":"page"},{"location":"examples/2_Plots/#","page":"Plots.jl examples","title":"Plots.jl examples","text":"This page was generated using Literate.jl.","category":"page"},{"location":"#UnitfulRecipes.jl-1","page":"Home","title":"UnitfulRecipes.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"for plotting data with units seamlessly in Julia","category":"page"},{"location":"#","page":"Home","title":"Home","text":"UnitfulRecipes.jl provides recipes for plotting figures (Plots.jl) when using data with units (Unitful.jl).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Documentation-1","page":"Home","title":"Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"There is no real documentation for UnitfulRecipes.jl. The goal is that if you can plot something with Plots.jl then you should be able to plot the same thing with units.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Essentially, UnitfulRecipes.jl strips the units of your data and appends them to the corresponding axis labels.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pictures speak louder than words, so we wrote some examples (accessible through the links on the left) for you to get an idea of what this package does or to simply try it out for yourself!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: You can run the examples!\nThese examples are available as Jupyter notebooks (through nbviewer or binder)!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Ommissions,-bugs,-and-contributing-1","page":"Home","title":"Ommissions, bugs, and contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Please do not hesitate to raise an issue or submit a PR if you would like a new recipe to be added.","category":"page"}]
}
