class CreateRentals < ActiveRecord::Migration
  def change
    create_table :rentals do |t|
#      t.references :host, index: true, foreign_key: true
      t.string :tagline
      t.text :desc
      t.string :street_number
      t.string :street_name
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.float :lat
      t.float :lng
      t.decimal :sec_deposit
      t.decimal :cleaning_fee
      t.decimal :tax_rate

      t.timestamps null: false
    end
  end
end
