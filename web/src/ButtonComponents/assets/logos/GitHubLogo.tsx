import React from 'react'

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      className={className}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#24292F" transform="translate(-10 -80)">
          <g transform="translate(10.205 80.972)">
            <path d="M8.302 0C3.712 0 0 3.68 0 8.231c0 3.639 2.378 6.719 5.677 7.809.412.082.563-.177.563-.395 0-.19-.013-.845-.013-1.527-2.31.491-2.79-.98-2.79-.98-.372-.955-.922-1.2-.922-1.2-.756-.504.055-.504.055-.504.839.054 1.279.845 1.279.845.742 1.253 1.938.9 2.419.681.069-.531.289-.9.522-1.104-1.842-.19-3.78-.9-3.78-4.06 0-.9.33-1.636.852-2.209-.082-.204-.37-1.049.083-2.18 0 0 .701-.218 2.282.845a8.103 8.103 0 012.075-.273c.701 0 1.416.096 2.076.273 1.58-1.063 2.281-.845 2.281-.845.454 1.131.165 1.976.083 2.18.536.573.852 1.309.852 2.208 0 3.162-1.938 3.857-3.794 4.061.303.26.564.75.564 1.527 0 1.103-.014 1.99-.014 2.262 0 .218.152.477.564.395 3.299-1.09 5.677-4.17 5.677-7.809C16.604 3.68 12.879 0 8.302 0z"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default React.memo(GitHubLogo)
