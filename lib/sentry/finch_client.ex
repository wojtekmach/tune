defmodule Sentry.FinchClient do
  @moduledoc """
  Defines a small shim to use `Finch` as a `Sentry.HTTPClient`.
  """

  @behaviour Sentry.HTTPClient

  def post(url, headers, body) do
    request = Finch.build(:post, url, headers, body)

    case Finch.request(request, Sentry.Finch) do
      {:ok, response} ->
        {:ok, response.status, response.headers, response.body}

      error ->
        error
    end
  end
end
