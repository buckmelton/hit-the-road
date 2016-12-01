class V1::RentalsController < ApplicationController

  before_action :set_rental, only: [:show, :update, :destroy]

  def index
    render json: Rental.all
  end

  def show
    render json: @rental
  end

  def new
  end

  def edit
  end

  def create
    @rental = Rental.new(rental_params)
    if @rental.save
      render json: @rental  #, status: :created, location: @playdate
    else
      # to implement
    end
  end

  def update
    if @rental.update(rental_params)
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def destroy
    if @rental.destroy
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  private

    def set_rental
      @rental = Rental.find(params[:id])
    end

    def rental_params
      params.permit(:tagline, :desc, :street_number, :street_name, :city, :state,
                    :zip, :country, :lat, :lng, :sec_deposit, :cleaning_fee, :tax_rate)

    end
end
