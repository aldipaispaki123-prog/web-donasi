"use client"

import { useState } from "react"
import { Copy, Check, CreditCard, QrCode, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { campaignData, formatRupiah, getProgressPercentage } from "@/lib/campaign-data"

const presetAmounts = [25000, 50000, 100000, 250000, 500000, 1000000]

export function DonationForm() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [message, setMessage] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "qris">("bank")
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const percentage = getProgressPercentage()

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center lg:px-8">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h2 className="mb-3 text-2xl font-bold text-foreground">Terima Kasih!</h2>
        <p className="mb-2 text-muted-foreground leading-relaxed">
          Donasi Anda sebesar <strong className="text-foreground">{formatRupiah(Number(amount))}</strong> telah dicatat.
        </p>
        <p className="mb-8 text-sm text-muted-foreground">
          Silakan lakukan transfer ke rekening yang tertera dan konfirmasi pembayaran Anda.
        </p>

        <Card className="mb-8 text-left">
          <CardContent className="p-6">
            <h3 className="mb-4 font-semibold text-card-foreground">Informasi Transfer</h3>
            {paymentMethod === "bank" ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Bank</p>
                    <p className="font-medium text-card-foreground">{campaignData.bankAccount.bankName}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Nomor Rekening</p>
                    <p className="font-mono font-medium text-card-foreground">{campaignData.bankAccount.accountNumber}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(campaignData.bankAccount.accountNumber)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Atas Nama</p>
                    <p className="font-medium text-card-foreground">{campaignData.bankAccount.accountHolder}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Scan barcode QRIS di bawah ini untuk melakukan pembayaran:</p>
                <div className="flex justify-center">
                  <img src="/images/qris-barcode.jpg" alt="QRIS Barcode" className="h-64 w-64 rounded-lg border border-border" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Button asChild>
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke beranda
      </Link>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Campaign Summary - Sidebar */}
        <div className="lg:col-span-2">
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="mb-1 text-lg font-bold text-card-foreground text-balance">
                {campaignData.title}
              </h2>
              <p className="mb-4 text-xs text-muted-foreground">
                {campaignData.organizer}
              </p>

              <div className="mb-2 flex items-end justify-between">
                <p className="text-lg font-bold text-primary">
                  {formatRupiah(campaignData.collectedAmount)}
                </p>
                <p className="text-xs text-muted-foreground">{percentage}%</p>
              </div>
              <Progress value={percentage} className="mb-1 h-2" />
              <p className="mb-6 text-xs text-muted-foreground">
                Target: {formatRupiah(campaignData.targetAmount)}
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-card-foreground">Rekening Penerima</h3>
                <div className="rounded-lg bg-secondary p-3">
                  <p className="text-xs text-muted-foreground">
                    {campaignData.bankAccount.bankName}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm font-medium text-card-foreground">
                      {campaignData.bankAccount.accountNumber}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      onClick={() => handleCopy(campaignData.bankAccount.accountNumber)}
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    a.n. {campaignData.bankAccount.accountHolder}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Form */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Form Donasi</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method */}
                <div className="space-y-4">
                  <div>
                    <Label>Metode Pembayaran</Label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("bank")}
                        className={`flex items-center justify-center gap-2 rounded-xl border-2 p-3 text-sm font-medium transition-colors ${
                          paymentMethod === "bank"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-card text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <CreditCard className="h-4 w-4" />
                        Transfer Bank
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("qris")}
                        className={`flex items-center justify-center gap-2 rounded-xl border-2 p-3 text-sm font-medium transition-colors ${
                          paymentMethod === "qris"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-card text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <QrCode className="h-4 w-4" />
                        QRIS
                      </button>
                    </div>
                  </div>

                  {/* QRIS Barcode Display */}
                  {paymentMethod === "qris" && (
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-primary/20 bg-primary/5 p-6">
                      <p className="text-center text-sm text-muted-foreground">
                        Mohon maaf Kak, pembayaran via QRIS sedang mengalami gangguan. Untuk sementara, Kakak bisa transfer ke nomor rekening yang sudah tertera. Terima kasih
                      </p>
                      <img
                        src="/images/qris-barcode.jpg"
                        alt="QRIS Payment Barcode"
                        className="h-56 w-56 rounded-lg border-2 border-border bg-white p-2"
                      />
                      <p className="text-center text-xs text-muted-foreground">
                        Tunjukkan barcode ini kepada penerima untuk verifikasi pembayaran
                      </p>
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Donatur</Label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isAnonymous}
                    required={!isAnonymous}
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="anonymous"
                      checked={isAnonymous}
                      onCheckedChange={(checked) => {
                        setIsAnonymous(checked === true)
                        if (checked) setName("Anonim")
                        else setName("")
                      }}
                    />
                    <Label htmlFor="anonymous" className="text-sm font-normal text-muted-foreground">
                      Donasi sebagai anonim
                    </Label>
                  </div>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Nominal Donasi</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(String(preset))}
                        className={`rounded-lg border p-2 text-sm font-medium transition-colors ${
                          amount === String(preset)
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-card text-card-foreground hover:border-primary/40"
                        }`}
                      >
                        {formatRupiah(preset)}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      Rp
                    </span>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Nominal lainnya"
                      className="pl-10"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      min="1000"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Pesan / Doa <span className="text-muted-foreground">(opsional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan atau doa untuk penerima donasi..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Kirim Donasi
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Dengan mengirim donasi, Anda menyetujui syarat dan ketentuan yang berlaku.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
