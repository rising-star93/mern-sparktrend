import {OrderStatus} from '../../helpers/order'

const en = {
   // raw string
   "browse": "browse",
   "Dashboard": "Dashboard",
   "Overview": "Overview",
   "My Purchases": "My Purchases",
   "My Sales": "My Sales",
   "My Products": "My Products",
   "Edit Profile": "Edit Profile",
   "Change Password": "Change Password",
   "Sign Out": "Sign Out",
   "Browse": "Browse",
   "My Purchase": "My Purchase",
   "Browse Influencers": "Browse Influencers",
   "Sparktrend for Buyers": "Sparktrend for Buyers",
   "Targeted Influencers": "Targeted Influencers",
   "Secure Transaction": "Secure Transaction",
   "Easy to Use": "Easy to Use",
   "Sparktrend for Sellers": "Sparktrend for Sellers",
   "Making it safe and sure for sellers to do transactions": "Making it safe and sure for sellers to do transactions",
   "Low and transparent fee": "Low and transparent fee",
   "Secure payment": "Secure payment",
   "A place for sellers to find the right buyers": "A place for sellers to find the right buyers",
   "User-friendly dashboard for sellers to easily process and manage sales": "User-friendly dashboard for sellers to easily process and manage sales",
   "Ready to Leverage your business to the next level?": "Ready to Leverage your business to the next level?",
   "Sign Up": "Sign Up",
   "Sitemap": "Sitemap",
   "Home": "Home",
   "Sign In": "Sign In",
   "Seller Guide": "Seller Guide",
   "Buyer Guide": "Buyer Guide",
   "Terms of Service": "Terms of Service",
   "Privacy Policy": "Privacy Policy",
   "Useful Links": "Useful Links",
   "Refer a Friend": "Refer a Friend",
   "Affiliate": "Affiliate",
   "Filters": "Filters",
   "Price": "Price",
   "Minimum Price": "Minimum Price",
   "Maximum Price": "Maximum Price",
   "Niche": "Niche",
   "Humour & Memes": "Humour & Memes",
   "Fashion & Style": "Fashion & Style",
   "Fitness & Sports": "Fitness & Sports",
   "Quotes & Texts": "Quotes & Texts",
   "Luxury & Motivation": "Luxury & Motivation",
   "Cars & Bikes": "Cars & Bikes",
   "Outdoor & Travel": "Outdoor & Travel",
   "Food & Nutrition": "Food & Nutrition",
   "Pets & Animals": "Pets & Animals",
   "Models & Lifestyle": "Models & Lifestyle",
   "Personal & Talent": "Personal & Talent",
   "Music & Singers": "Music & Singers",
   "Science & Technology": "Science & Technology",
   "Art": "Art",
   "Beauty, Cosmetic & Personal Care": "Beauty, Cosmetic & Personal Care",
   "Clip & Movie": "Clip & Movie",
   "Drink & Beverage": "Drink & Beverage",
   "Games & Play": "Games & Play",
   "Cabin and Wood": "Cabin and Wood",
   "Interior Design": "Interior Design",
   "Categories": "Categories",
   "Single": "Single",
   "Multiple": "Multiple",
   "Story": "Story",
   "Gender": "Gender",
   "All": "All",
   "Male": "Male",
   "Female": "Female",
   "Country Base": "Country Base",
   "Apply Filter": "Apply Filter",
   "Reset Filter": "Reset Filter",
   "Search for instagram username here...": "Search for instagram username here...",
   "Related Page": "Related Page",
   "Followers": "Followers",
   "Success Rate": "Success Rate",
   "Starts From": "Starts From",
   "Shoutout completed: ": "Shoutout completed: ",
   "Category": "Category",
   "What is this?": "What is this?",
   "Select Categories": "Select Categories",
   "Category Info": "Category Info",
   "Time": "Time",
   "Select Duration": "Select Duration",
   "Buy Now": "Buy Now",
   "Confirm": "Confirm",
   "Your Post": "Your Post",
   "Date": "Date",
   "Current Timezone": "Current Timezone",
   "You can only order shoutout minimum 48 hours from now": "You can only order shoutout minimum 48 hours from now",
   "Caption": "Caption",
   "Additional Information": "Additional Information",
   "Close": "Close",
   "Order Shoutout": "Order Shoutout",
   "Age Range": "Age Range",
   "Location": "Location",
   "Single post is a simple post of a picture and caption.": "Single post is a simple post of a picture and caption.",
   "Multiple post is a post of multiple pictures at once and a caption.": "Multiple post is a post of multiple pictures at once and a caption.",
   "Story post is a post on Instagram story.": "Story post is a post on Instagram story.",
   "With Bio URL":"With Bio URL",
   "Bio URL": "Bio URL",
   "Swipe up URL": "Swipe up URL",
   "Status": "Status",
   "This Month Sales": "This Month Sales",
   "Total Sales": "Total Sales",
   "upcoming schedule": "upcoming schedule",
   "Purchased Shoutouts": "Purchased Shoutouts",
   "Pending Outgoing": "Pending Outgoing",
   "Expired": "Expired",
   "Failed": "Failed",
   "Rejected": "Rejected",
   "Completed": "Completed",
   "Sold Shoutouts": "Sold Shoutouts",
   "Success rate": "Success rate",
   "My Accounts": "My Accounts",
   "Add Account": "Add Account",
   "Total Followers": "Total Followers",
   "Name": "Name",
   "Email": "Email",
   "Paypal Email": "Paypal Email",
   "Country": "Country",
   "Referral Code": "Referral Code",
   "Referral By": "Referral By",
   "Update Profile": "Update Profile",
   "Old Password": "Old Password",
   "New Password": "New Password",
   "Confirm Password": "Confirm Password",
   "Password": "Password",
   "Forgot password?": "Forgot password?",
   "Create new account": "Create new account",
   // new translations
   "Oops!": "Oops!",
   "Looks like there's nothing here...": "Looks like there's nothing here...",
   "Start Date": "Start Date",
   "Duration": "Duration",
   "hour(s)": "hour(s)",
   "Category Type": "Category Type",
   "Download Attachment(s)": "Download Attachment(s)",
   "Start": "Start",
   "Copy text": "Copy text",
   "Payment Details": "Payment Details",
   "Payment Method": "Payment Method",
   "Bio Price": "Bio Price",
   "Grand Total": "Grand Total",
   "Check Instagram": "Check Instagram",
   "Please provide your name and profile of your instagram that will help us verifying your instagram account": "Please provide your name and profile of your instagram that will help us verifying your instagram account",
   "Instagram Account": "Instagram Account",
   "Validate Instagram": "Validate Instagram",
   "Please add the code below into your Instagram bio and then click validate.": "Please add the code below into your Instagram bio and then click validate.",
   "Verify Instagram": "Verify Instagram",
   "Back": "Back",
   "Add Product": "Add Product",
   "Describe Your Page": "Describe Your Page",
   "Please select niche. Buyers can find your product by niche.": "Please select niche. Buyers can find your product by niche.",
   "finish": "finish",
   // new
   "Full Name": "Full Name",
   "Paypal E-mail (optional)": "Paypal E-mail (optional)",
   "Referral Code (optional)": "Referral Code (optional)",
   "unique validation failed on email": "That email is already in use. Please use another one.",
   "Please enter an instagram account": "Please enter an instagram account",
   "Next": "Next",
   "Start selling shoutouts at Sparktrend": "Start selling shoutouts at Sparktrend",
   "Start buying shoutouts at Sparktrend": "Start buying shoutouts at Sparktrend",
   "Sign up Now!": "Sign up Now!",
   "Pay": "Pay",
   "How it Works": "How it Works",
   "For Buyers": "For Buyers",
   "For Sellers": "For Sellers",
   "Rating": "Rating",
   "Niches": "Niches",
   "Schedule": "Schedule",
   "Username": "Username",
   "PayPal E-mail (optional)": "PayPal E-mail (optional)",

   home: {
      main_legend: "Sparktrend is an online marketplace to buy and sell Instagram shoutouts.",
      targeted_influencers_desc: "We group subscribed influencers based on their overall insights, such as the top country location of their audience, age range, gender, active followers time and niche in order to make sure that buyers find the right influencers for their brands.",
      secure_transaction_desc: "Sparktrend will handle the payment and keep your money safe with us until your campaign has been completed by the influencer.",
      easy2_use_desc: "We make sure that everything is as user-friendly as possible so it will be easier for you to manage your campaign and transaction."
   },
   shoutout_history: "{1} out of {0}",
   demograph_chart: {
      age_range_desc: "This graph gives you the information of the age distribution of this page’s followers. This will help you to create the suitable content for your audiences.",
      location_desc: "This graph gives you the information of the countries distribution of this page’s followers.",
      gender_desc: "This graph gives you the information of the gender distribution of this page’s followers."
   },
   order: {
      error: {
         no_such_product: "No such product",
         invalid_product: "Invalid product",
         cannot_buy_own_product: "You cannot buy your own product",
         empty_posts: "Please provide at least one post",
         account_empty: "Account does not exists",
         paypal_error: "Paypal payment failed. Please try again later...",
         paid_amount_mismatch: "Payment total mismatch. Please try again later...",
         unverified_user: "Please verify your email first",
         unknown_action: "Unknown action",
         no_ownership: "You have no relationship to this order",
         rejected_order: "Rejected order",
         invalid_ownership: "Invalid action",
         expired_order: "Order has been expired.",
         buyer_invalid_start_time: "Shoutouts can be started minimum 48 hours from now",
         seller_invalid_start_time: "Cannot start order now. Please start an order on time...",
         cannot_complete_before_time: "Cannot complete order before time",
         invalid_action: "Invalid action",
         already_paid: "Order has been already paid",
         not_paid_yet: "Order is not paid yet",
         unknown_reason: "An error has occurred. Please try again later...",
         //new
         cannot_rate_before_payment: 'You cannot rate a shoutout before payment',
         cannot_change_feedback_after_completion: 'You cannot change your feedback of a completed shoutout.'
      },
      success: {
         order_accepted: "Order has been accepted",
         order_rejected: "Order has been rejected",
         order_started: "Order has been started",
         order_completed: "Order has been completed",
         order_paid: "Payment was done successfully",
         order_refunded: "Refunded an order",
         order_rated: "Your rating has been submitted."
      },
      feedback_solicit: "Help us improve your experience at sparktrend.net by submitting your feedback of this service.",
      feedback_guide: "You can submit your feedback after payment. You can edit your feedback before ordered shoutout is completed."
   },
   error: {
      default: "Oops! Something is wrong. Please try again later..."
   },
   instaaccount: {
      status: {
         verified: 'Verified',
         unverified: 'Not Verified',
         in_progress: 'In Progress'
      },
      error: {
         invalid_account: "Invalid account",
         instagram_already_exists: "Instagram account already exists",
         cannot_get_instagram_account: "Cannot get account information.",
         insufficient_followers: "Insufficient followers",
         insta_verification_failed: "Verification failed",
         product_save_failed: "Product save failed",
         invalid_data: "Invalid data",
         verification_failed: "Verification failed.",
         insights_upload_failed: "Image upload failed"
      },
      success: {
         insights_uploaded: "Insight picture uploaded",
         product_saved: "Product saved"
      }
   },
   guide: {
      seller: {
         one: "Add your account by going to Dashboard > My Products > Add Account.",
         two: "Input your Instagram Username and press Check Instagram (you need to have at least 10K followers and must be a business account). Afterward, click next.",
         three: "To have your Instagram account confirmed and ready to sell, put the unique code on your Instagram bio and then press verify.",
         four: "Upload screenshots of your insights (gender, age range, top country location and active time). You may skip this if you have just turned on your business profile because it might take a week to get the insights. Note that if you don’t have insights yet, we can’t confirm you as a verified seller which means you have to wait to sell at Sparktrend yet.",
         five: "Afterwards, fill out details of your product and set the price for all the types of shoutout you want to sell and then click Add Product.",
         six: "Now that you're all set, your product has been created. Please wait for our Executive Admin to verify your product in 24 hours. Afterward, you will be able to share your products and wait for someone to buy it.",
         seven: {
            q: "I make a sales! Someone just purchases one of my products! What should I do?",
            a: "Simply go to order, and go to Dashboard > My Sales and go to request section. You can choose whether you want to accept or reject. You have 36 hours to take action before the request is automatically rejected by the system."
         },
         eight: {
            q: "I make a sales! Someone just purchases one of my products! What should I do?",
            a: "If you accept the request, the shout will be moved to accepted, and you can proceed to post the promotions when the posting time come."
         },
         nine: "After the posting time comes, download the picture and caption, and then post it, and please be sure to include unique code for the caption. After you post it, click on the start button. After the post time is fulfilled, you can click on submit button and it’s done."
      },
      buyer: {
         one: "Go to [Browse] and select which shout you want to buy.",
         two: "Once you've selected, you can also decide what kind of shout and when is the best time for the shout. Click [Buy Now] to proceed.",
         three: "Upload the image you want to be 'shout' and specify the date, caption as well as additional information. And click [Order Shoutout].",
         four: "To check the status of you post, go to orders in the [Purchased Shouts] tab",
         five: "You will be redirected to transaction review, once you make sure it's correct, you can process the payment via paypal.",
         six: "To check the status of your post, go to dashboard in the Dashboard > My Purchases tab."
      }
   }
}

en.order_status = {shoutout: {}, payment: {}}
en.order_status.shoutout[OrderStatus.SHOUTOUT.NOT_CREATED] = 'Not created'
en.order_status.shoutout[OrderStatus.SHOUTOUT.CREATED] = 'Request'
en.order_status.shoutout[OrderStatus.SHOUTOUT.ACCEPTED] = 'Accepted'
en.order_status.shoutout[OrderStatus.SHOUTOUT.STARTED] = 'Ongoing'
en.order_status.shoutout[OrderStatus.SHOUTOUT.COMPLETED] = 'Completed'
en.order_status.shoutout[OrderStatus.SHOUTOUT.REJECTED] = 'Rejected'
en.order_status.shoutout[OrderStatus.SHOUTOUT.EXPIRED] = 'Expired'
en.order_status.payment[OrderStatus.PAYMENT.NOT_PAID] = 'Awaiting payment'
en.order_status.payment[OrderStatus.PAYMENT.PAID] = 'Paid'
en.order_status.payment[OrderStatus.PAYMENT.REFUNDED] = 'Refunded'
export default en;