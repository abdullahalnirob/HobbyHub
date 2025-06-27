import React from "react";

const Faq = () => {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="join join-vertical w-full bg-white">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-blue-500">
              How do I create an account on Hoobyhub?
            </div>
            <div className="collapse-content text-sm ">
              Click the "Sign Up" button in the top right corner and follow the
              easy registration steps.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-blue-500">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm ">
              Click on "Forgot Password" on the login page. You'll receive an
              email with reset instructions.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-blue-500">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm ">
              Go to "My Account" and select "Edit Profile" to change your
              details.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-blue-500">
              How can I join a group?
            </div>
            <div className="collapse-content text-sm ">
              Navigate to the "Groups" section, browse or search for your
              interest, and click "Join Group".
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-blue-500">
              Can I create my own group?
            </div>
            <div className="collapse-content text-sm ">
              Yes! Go to the "Create Group" page, fill out the details, and
              submit your request.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-blue-500">
              Is Hoobyhub free to use?
            </div>
            <div className="collapse-content text-sm">
              Yes, Hoobyhub is completely free for all users to join and
              participate in groups.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
