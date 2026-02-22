'use client';
import { useState } from 'react';

export default function PaypalDonateCard() {
    const donationAmounts = [25, 50, 100, 250, 500];
    const [amount, setAmount] = useState('100');
    const [customAmount, setCustomAmount] = useState('');
    const [isCustom, setIsCustom] = useState(false);

    return (
        <div className="bg-[#fafafa] rounded-3xl p-8 md:p-12 mb-12 shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#800020]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    💳
                </div>
                <h2 className="text-2xl font-bold text-[#1d1d2c] mb-2">Give Online</h2>
                <p className="text-gray-600">
                    Credit cards accepted for one-time or recurring donations include Amex, Visa, MasterCard or Discover.
                </p>
            </div>

            {/* Donation Amounts */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                {donationAmounts.map((preset) => (
                    <button
                        key={preset}
                        onClick={() => {
                            setAmount(preset.toString());
                            setIsCustom(false);
                        }}
                        className={`py-4 px-2 bg-white border-2 rounded-xl font-bold transition-all ${!isCustom && amount === preset.toString() ? 'border-[#800020] bg-[#800020]/5 text-[#800020]' : 'border-gray-200 text-[#1d1d2c] hover:border-[#800020] hover:bg-[#800020]/5'}`}
                    >
                        ${preset}
                    </button>
                ))}
                <button
                    onClick={() => {
                        setIsCustom(true);
                        setAmount(customAmount);
                    }}
                    className={`py-4 px-2 bg-white border-2 rounded-xl font-bold transition-all ${isCustom ? 'border-[#800020] bg-[#800020]/5 text-[#800020]' : 'border-gray-200 text-[#1d1d2c] hover:border-[#800020] hover:bg-[#800020]/5'}`}
                >
                    Custom
                </button>
            </div>

            {isCustom && (
                <div className="mb-8 animate-fade-in">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Amount ($)</label>
                    <input
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount(e.target.value);
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition-all"
                        placeholder="Enter amount"
                    />
                </div>
            )}

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="business" value="hopemissions360@gmail.com" />
                <input type="hidden" name="item_name" value="HOPE MISSIONS 360, INC." />
                <input type="hidden" name="item_number" value="" />
                <input type="hidden" name="amount" value={amount} />
                <input type="hidden" name="bn" value="godaddy_hosting_WPS_US" />

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg flex items-center justify-center gap-2">
                    ❤️ Donate {amount ? `$${amount}` : 'Now'}
                </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
                <span>Secure payment powered by PayPal</span>
            </p>
        </div>
    );
}
