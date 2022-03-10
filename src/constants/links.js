import React from "react"
import { FaCcStripe, FaCreditCard, FaAlipay } from "react-icons/fa"

export default [
  {
    page: "checkout",
    label: "payments",
    url: "./checkout/payments",
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "checkout",
    label: "terminal",
    url: "./checkout/payments",
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "checkout",
    label: "connect",
    url: "./checkout/payments",
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "checkout",
    label: "billing",
    url: "./checkout/payments",
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "roasts",
    label: "light",
    url: "./checkout/payments",
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "roasts",
    label: "medium",
    url: "./checkout/payments",
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "dark",
    label: "plugins",
    url: "./checkout/payments",
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "espresso",
    label: "plugins",
    url: "./checkout/payments",
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "company",
    label: "jobs",
    url: "./products/payments",
    icon: <FaCcStripe className="icon" />,
  },
  {
    page: "company",
    label: "customers",
    url: "./products/payments",
    icon: <FaCcStripe className="icon" />,
  },
]
