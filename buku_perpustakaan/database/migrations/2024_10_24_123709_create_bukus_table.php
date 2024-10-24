<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bukus', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('judul'); // Judul buku
            $table->string('penulis'); // Nama penulis (string instead of foreign key)
            $table->string('kategori'); // Kategori buku (string instead of foreign key)
            $table->string('penerbit'); // Nama penerbit (string instead of foreign key)
            $table->year('tahun_terbit'); // Tahun terbit
            $table->text('deskripsi'); // Deskripsi buku
            $table->integer('jumlah_salinan')->default(1); // Jumlah salinan buku
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bukus');
    }
};
