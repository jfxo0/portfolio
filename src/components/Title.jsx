
function SectionTitle({ icon: Icon, title, subtitle }) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="rounded-2xl bg-white p-3 shadow-sm border border-gray-200">
                    <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">{subtitle}</p>
        </div>
    );
}

export default SectionTitle;