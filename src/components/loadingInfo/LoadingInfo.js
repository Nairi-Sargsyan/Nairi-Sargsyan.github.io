import './LoadingInfo.scss';

const LoadingInfo = () => {
    return (
        <div className='loading'>
            <span className='spiner'></span>
            <span className='spiner_logo'>
                <svg width="170" height="170" viewBox="0 0 378 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_13)">
                        <path d="M189 158.721C155 158.721 127.319 131.049 127.319 97.0167C127.319 62.9841 155 35.3325 189 35.3325C223 35.3325 250.681 63.0038 250.681 97.0364C250.681 131.069 223 158.721 189 158.721ZM189 37.302C156.083 37.302 129.288 64.087 129.288 97.0364C129.288 129.986 156.083 156.751 189 156.751C221.918 156.751 248.712 129.966 248.712 97.0167C248.712 64.0673 221.918 37.302 189 37.302Z" fill="#E1B168" />
                        <path d="M189 170.537C184.019 170.537 179.038 170.025 174.195 169.04C169.47 168.075 164.824 166.638 160.394 164.767C156.023 162.915 151.83 160.631 147.912 157.992C144.014 155.372 140.372 152.339 137.045 149.011C133.717 145.682 130.705 142.019 128.067 138.139C127.811 137.745 127.91 137.214 128.303 136.958C128.697 136.701 129.229 136.8 129.485 137.194C132.044 140.995 134.997 144.579 138.246 147.829C141.494 151.079 145.077 154.033 148.877 156.593C152.716 159.193 156.811 161.419 161.063 163.211C165.395 165.042 169.923 166.441 174.53 167.386C183.98 169.316 194.001 169.316 203.47 167.386C208.077 166.441 212.605 165.042 216.937 163.211C221.189 161.419 225.284 159.173 229.123 156.593C232.923 154.013 236.506 151.079 239.754 147.829C243.003 144.579 245.956 141.015 248.515 137.194C248.771 136.8 249.303 136.701 249.697 136.958C250.09 137.214 250.189 137.745 249.933 138.139C247.295 142.039 244.282 145.702 240.955 149.011C237.628 152.339 233.986 155.352 230.088 157.992C226.17 160.65 221.957 162.935 217.606 164.767C213.176 166.638 208.53 168.075 203.805 169.04C198.962 170.025 193.981 170.537 189 170.537Z" fill="#E1B168" />
                        <path d="M249.224 57.2528C248.948 57.2528 248.692 57.115 248.515 56.8786C245.956 53.0775 243.003 49.4931 239.754 46.2434C236.506 42.9938 232.942 40.0395 229.123 37.4792C225.284 34.8795 221.189 32.654 216.937 30.8618C212.605 29.0301 208.077 27.6318 203.47 26.6865C194.02 24.7564 183.999 24.7564 174.53 26.6865C169.923 27.6318 165.375 29.0301 161.063 30.8618C156.811 32.6737 152.696 34.8992 148.877 37.4792C145.077 40.0395 141.494 42.9938 138.246 46.2434C134.997 49.4931 132.044 53.0775 129.485 56.8786C129.229 57.2725 128.697 57.371 128.303 57.115C127.91 56.8589 127.811 56.3272 128.067 55.9333C130.705 52.0337 133.717 48.3705 137.045 45.0617C140.372 41.7333 144.034 38.72 147.912 36.0809C151.83 33.4221 156.043 31.1572 160.394 29.3059C164.824 27.4349 169.47 25.9971 174.195 25.0124C183.881 23.0232 194.119 23.0232 203.805 25.0124C208.53 25.9774 213.176 27.4152 217.606 29.3059C221.957 31.1572 226.17 33.4221 230.088 36.0809C233.986 38.72 237.648 41.7333 240.955 45.0617C244.282 48.3902 247.295 52.0534 249.933 55.9333C250.189 56.3272 250.09 56.8589 249.697 57.115C249.559 57.1937 249.401 57.2528 249.224 57.2528Z" fill="#E1B168" />
                        <path d="M191.973 118.977C187.543 118.977 183.232 118.031 179.156 116.18C176.105 117.598 172.876 118.307 169.549 118.307C156.909 118.307 146.613 108.007 146.613 95.3625C146.613 84.6091 154.153 75.254 164.607 72.9694C170.08 62.8857 180.515 56.6621 191.973 56.6621C208.373 56.6621 221.898 69.3653 223 85.6923C228.178 88.9025 231.368 94.5944 231.368 100.68C231.368 110.409 223.453 118.327 213.728 118.327C210.715 118.327 207.743 117.539 205.085 116.042C200.95 117.992 196.521 118.977 191.973 118.977ZM179.156 114.013L179.589 114.21C187.602 117.972 196.796 117.913 204.73 114.033L205.203 113.797L205.656 114.073C208.117 115.55 210.912 116.337 213.747 116.337C222.39 116.337 229.418 109.306 229.418 100.66C229.418 95.0867 226.406 89.8873 221.563 87.0906L221.091 86.8149L221.071 86.2831C220.283 70.7636 207.506 58.5922 191.973 58.5922C181.086 58.5922 171.183 64.5991 166.123 74.2693L165.907 74.6829L165.454 74.7814C155.689 76.7311 148.582 85.3772 148.582 95.3428C148.582 106.904 157.992 116.318 169.549 116.318C172.738 116.318 175.809 115.589 178.723 114.191L179.156 114.013Z" fill="#E1B168" />
                        <path d="M212.093 137.372H165.907V116.062L167.009 116.2C167.974 116.318 168.781 116.377 169.549 116.377C172.738 116.377 175.809 115.648 178.723 114.25L179.156 114.014L179.589 114.21C187.602 117.972 196.796 117.913 204.73 114.033L205.203 113.797L205.656 114.073C207.368 115.097 209.239 115.786 211.267 116.121L212.093 116.259V137.372ZM167.875 135.402H210.125V117.913C208.353 117.539 206.66 116.909 205.104 116.022C196.895 119.883 187.445 119.942 179.156 116.2C176.105 117.618 172.876 118.327 169.549 118.327C169.017 118.327 168.466 118.307 167.875 118.248V135.402Z" fill="#E1B168" />
                        <path d="M128.461 110.921H111.254C110.703 110.921 110.27 110.488 110.27 109.936C110.27 109.385 110.703 108.952 111.254 108.952H128.461C129.012 108.952 129.445 109.385 129.445 109.936C129.445 110.488 129.012 110.921 128.461 110.921Z" fill="#E1B168" />
                        <path d="M127.614 96.2488H94.9528C94.4015 96.2488 93.9684 95.8155 93.9684 95.264C93.9684 94.7126 94.4015 94.2793 94.9528 94.2793H127.614C128.166 94.2793 128.599 94.7126 128.599 95.264C128.599 95.8155 128.166 96.2488 127.614 96.2488Z" fill="#E1B168" />
                        <path d="M129.78 81.5759H112.573C112.022 81.5759 111.589 81.1426 111.589 80.5912C111.589 80.0397 112.022 79.6064 112.573 79.6064H129.78C130.331 79.6064 130.764 80.0397 130.764 80.5912C130.764 81.1426 130.331 81.5759 129.78 81.5759Z" fill="#E1B168" />
                        <path d="M128.441 103.575H102.887C102.336 103.575 101.902 103.142 101.902 102.59C101.902 102.039 102.336 101.605 102.887 101.605H128.441C128.992 101.605 129.426 102.039 129.426 102.59C129.426 103.142 128.973 103.575 128.441 103.575Z" fill="#E1B168" />
                        <path d="M128.303 88.8044H102.749C102.198 88.8044 101.765 88.3712 101.765 87.8197C101.765 87.2682 102.198 86.835 102.749 86.835H128.303C128.855 86.835 129.288 87.2682 129.288 87.8197C129.288 88.3712 128.855 88.8044 128.303 88.8044Z" fill="#E1B168" />
                        <path d="M266.726 83.3289H249.519C248.968 83.3289 248.535 82.8956 248.535 82.3441C248.535 81.7927 248.968 81.3594 249.519 81.3594H266.726C267.277 81.3594 267.711 81.7927 267.711 82.3441C267.711 82.8956 267.277 83.3289 266.726 83.3289Z" fill="#E1B168" />
                        <path d="M283.047 98.0012H250.386C249.834 98.0012 249.401 97.5679 249.401 97.0165C249.401 96.465 249.834 96.0317 250.386 96.0317H283.047C283.598 96.0317 284.032 96.465 284.032 97.0165C284.032 97.5679 283.598 98.0012 283.047 98.0012Z" fill="#E1B168" />
                        <path d="M265.407 112.674H248.2C247.649 112.674 247.216 112.241 247.216 111.689C247.216 111.138 247.649 110.705 248.2 110.705H265.407C265.958 110.705 266.392 111.138 266.392 111.689C266.392 112.241 265.958 112.674 265.407 112.674Z" fill="#E1B168" />
                        <path d="M275.113 90.6751H249.559C249.007 90.6751 248.574 90.2418 248.574 89.6903C248.574 89.1389 249.007 88.7056 249.559 88.7056H275.113C275.664 88.7056 276.097 89.1389 276.097 89.6903C276.097 90.2418 275.664 90.6751 275.113 90.6751Z" fill="#E1B168" />
                        <path d="M275.251 105.446H249.697C249.145 105.446 248.712 105.012 248.712 104.461C248.712 103.909 249.145 103.476 249.697 103.476H275.251C275.802 103.476 276.235 103.909 276.235 104.461C276.235 105.012 275.782 105.446 275.251 105.446Z" fill="#E1B168" />
                        <path d="M124.051 146.136L114.227 148.657L112.672 146.195L116.648 141.488L110.644 142.985L109.088 140.523L115.566 132.724L117.062 135.107L112.888 140.05L119.188 138.475L120.527 140.602L116.314 145.565L122.653 143.95L124.051 146.136Z" fill="#E1B168" />
                        <path d="M126.709 159.922L125.173 161.36L119.857 155.727L126.886 149.11L132.083 154.624L130.548 156.062L127.221 152.517L126 153.64L128.933 156.751L127.457 158.15L124.523 155.038L123.244 156.239L126.709 159.922Z" fill="#E1B168" />
                        <path d="M135.706 157.894L137.852 159.587L133.206 165.456L136.808 168.312L135.47 170.006L129.721 165.456L135.706 157.894Z" fill="#E1B168" />
                        <path d="M142.203 173.807C141.711 173.039 141.455 172.212 141.435 171.325C141.415 170.439 141.632 169.573 142.124 168.726C142.597 167.879 143.227 167.249 143.994 166.815C144.762 166.382 145.609 166.165 146.534 166.205C147.44 166.224 148.345 166.5 149.212 166.993C149.979 167.426 150.59 167.958 151.062 168.588C151.535 169.218 151.81 169.888 151.928 170.636L149.625 171.128C149.448 170.163 148.975 169.454 148.207 169.021C147.755 168.765 147.282 168.627 146.829 168.627C146.357 168.627 145.924 168.745 145.53 169.001C145.136 169.257 144.802 169.612 144.526 170.085C144.25 170.557 144.112 171.03 144.112 171.503C144.112 171.975 144.211 172.409 144.467 172.822C144.703 173.216 145.057 173.551 145.51 173.807C146.278 174.24 147.125 174.299 148.05 173.945L148.778 176.17C148.089 176.446 147.341 176.545 146.573 176.466C145.806 176.387 145.038 176.131 144.27 175.698C143.364 175.205 142.675 174.575 142.203 173.807Z" fill="#E1B168" />
                        <path d="M155.433 180.346C154.822 179.656 154.409 178.888 154.232 178.002C154.055 177.135 154.133 176.249 154.448 175.343C154.763 174.437 155.275 173.708 155.984 173.157C156.673 172.605 157.48 172.251 158.386 172.113C159.292 171.975 160.237 172.093 161.201 172.428C162.166 172.763 162.953 173.295 163.564 173.964C164.174 174.654 164.587 175.422 164.765 176.308C164.942 177.194 164.863 178.061 164.548 178.967C164.233 179.873 163.721 180.602 163.012 181.153C162.323 181.724 161.516 182.059 160.611 182.197C159.705 182.335 158.76 182.217 157.815 181.882C156.831 181.527 156.043 181.015 155.433 180.346ZM159.922 179.873C160.374 179.794 160.768 179.597 161.142 179.282C161.497 178.967 161.772 178.553 161.949 178.041C162.127 177.529 162.186 177.037 162.107 176.564C162.028 176.091 161.851 175.678 161.556 175.343C161.26 175.008 160.886 174.733 160.433 174.575C159.981 174.417 159.528 174.378 159.075 174.457C158.622 174.536 158.228 174.733 157.854 175.048C157.48 175.363 157.224 175.776 157.047 176.288C156.87 176.8 156.811 177.293 156.89 177.766C156.968 178.238 157.146 178.652 157.441 179.006C157.736 179.361 158.11 179.617 158.563 179.774C159.016 179.932 159.469 179.952 159.922 179.873Z" fill="#E1B168" />
                        <path d="M177.699 186.431L178.447 181.37L175.357 185.112L174.156 184.935L172.325 180.582L171.557 185.506L169.057 185.112L170.533 175.58L172.758 175.914L175.258 181.941L179.373 176.939L181.597 177.273L180.16 186.806L177.699 186.431Z" fill="#E1B168" />
                        <path d="M194.611 184.817L194.65 186.924L186.913 187.081L186.716 177.431L194.276 177.273L194.316 179.381L189.453 179.479L189.492 181.114L193.784 181.015L193.823 183.064L189.532 183.162L189.571 184.935L194.611 184.817Z" fill="#E1B168" />
                        <path d="M209.081 177.037L206.227 177.806L205.656 175.718L214.003 173.473L214.574 175.56L211.719 176.328L213.668 183.556L211.03 184.265L209.081 177.037Z" fill="#E1B168" />
                        <path d="M223.591 179.617C222.666 179.558 221.839 179.282 221.11 178.77C220.362 178.278 219.811 177.589 219.417 176.722C219.023 175.855 218.886 174.969 218.984 174.083C219.083 173.197 219.417 172.389 219.988 171.66C220.559 170.932 221.287 170.361 222.213 169.927C223.138 169.494 224.063 169.317 224.989 169.376C225.914 169.435 226.741 169.711 227.469 170.223C228.217 170.735 228.769 171.404 229.162 172.291C229.556 173.177 229.694 174.043 229.596 174.93C229.497 175.816 229.162 176.623 228.592 177.352C228.021 178.081 227.292 178.652 226.347 179.085C225.442 179.499 224.516 179.676 223.591 179.617ZM226.485 176.151C226.741 175.777 226.898 175.363 226.938 174.871C226.977 174.398 226.879 173.906 226.662 173.413C226.446 172.921 226.131 172.527 225.757 172.251C225.382 171.975 224.949 171.798 224.497 171.759C224.044 171.719 223.591 171.798 223.158 171.995C222.705 172.192 222.351 172.488 222.095 172.862C221.839 173.236 221.681 173.65 221.642 174.142C221.602 174.634 221.701 175.107 221.917 175.599C222.134 176.092 222.449 176.486 222.823 176.761C223.197 177.037 223.63 177.214 224.083 177.254C224.536 177.293 224.989 177.214 225.422 177.017C225.875 176.82 226.229 176.525 226.485 176.151Z" fill="#E1B168" />
                        <path d="M244.814 167.091C243.908 167.288 243.042 167.229 242.196 166.953C241.349 166.677 240.621 166.165 240.01 165.437C239.4 164.708 239.026 163.9 238.888 163.014C238.75 162.128 238.849 161.261 239.203 160.414C239.538 159.567 240.109 158.799 240.896 158.149C241.684 157.499 242.511 157.066 243.416 156.869C244.322 156.672 245.188 156.712 246.035 157.007C246.881 157.303 247.61 157.795 248.22 158.524C248.83 159.252 249.204 160.06 249.342 160.946C249.48 161.832 249.382 162.699 249.027 163.546C248.692 164.393 248.122 165.161 247.334 165.811C246.566 166.48 245.72 166.894 244.814 167.091ZM246.665 162.975C246.822 162.541 246.842 162.088 246.763 161.635C246.665 161.163 246.448 160.729 246.094 160.316C245.739 159.902 245.346 159.607 244.912 159.43C244.479 159.252 244.027 159.213 243.574 159.292C243.121 159.37 242.707 159.567 242.333 159.883C241.959 160.198 241.703 160.572 241.546 161.005C241.388 161.438 241.369 161.891 241.447 162.344C241.546 162.817 241.762 163.25 242.117 163.664C242.471 164.078 242.865 164.373 243.298 164.55C243.751 164.727 244.184 164.767 244.637 164.688C245.09 164.609 245.503 164.412 245.877 164.097C246.251 163.782 246.527 163.408 246.665 162.975Z" fill="#E1B168" />
                        <path d="M255.682 156.2C254.579 156.318 253.477 155.904 252.374 154.979L248.279 151.552L250.031 149.464L254.067 152.832C255.248 153.817 256.233 153.836 257.02 152.911C257.788 151.985 257.591 151.02 256.41 150.035L252.374 146.668L254.107 144.6L258.202 148.027C259.304 148.952 259.895 149.957 259.993 151.079C260.092 152.202 259.678 153.305 258.753 154.388C257.788 155.491 256.784 156.082 255.682 156.2Z" fill="#E1B168" />
                        <path d="M265.151 140.405L264.403 141.685L266.608 142.985L265.23 145.348L256.902 140.484L259.127 136.663C259.56 135.914 260.072 135.323 260.643 134.91C261.214 134.496 261.824 134.28 262.474 134.24C263.104 134.201 263.753 134.378 264.364 134.733C264.974 135.087 265.407 135.54 265.702 136.072C265.978 136.623 266.096 137.214 266.057 137.903L269.719 137.667L268.242 140.188L265.151 140.405ZM261.863 136.998C261.509 137.116 261.194 137.431 260.899 137.903L260.131 139.223L262.572 140.641L263.34 139.322C263.616 138.829 263.734 138.416 263.655 138.041C263.596 137.667 263.36 137.372 262.966 137.155C262.572 136.938 262.218 136.879 261.863 136.998Z" fill="#E1B168" />
                        <path d="M109.955 43.8599C110.073 44.8249 110.545 45.8687 111.412 46.9717C111.451 46.9913 111.431 47.0504 111.372 47.1292C111.313 47.208 111.254 47.2277 111.215 47.208C110.703 46.7353 110.033 46.1445 109.207 45.3961C108.38 44.6674 107.75 44.1356 107.317 43.8008C107.238 43.7417 107.238 43.6826 107.297 43.6038C107.356 43.5251 107.415 43.5054 107.494 43.5644C107.809 43.8008 108.262 43.5251 108.852 42.7176C109.817 41.5162 110.9 40.1178 112.14 38.4635C112.77 37.6166 113.42 36.7303 114.089 35.7653L115.152 34.2882C115.566 33.7564 115.822 33.3231 115.94 33.0277C116.058 32.7323 116.038 32.4566 115.881 32.2202C115.841 32.1611 115.841 32.1021 115.881 32.0233C115.94 31.9445 115.999 31.9445 116.038 31.9839C116.452 32.3581 117.082 32.9095 117.948 33.6186C118.814 34.3276 119.523 34.8987 120.074 35.3123C120.113 35.3517 120.113 35.3911 120.054 35.4699C119.995 35.5486 119.936 35.588 119.897 35.5683C118.696 34.8987 117.633 34.623 116.727 34.7609C115.822 34.8987 115.014 35.4108 114.345 36.3167C114.05 36.7106 113.853 37.0455 113.794 37.2818C113.715 37.5181 113.754 37.7545 113.873 37.9514C114.01 38.1484 114.266 38.3847 114.64 38.6801L124.484 46.0657C124.917 46.4005 125.272 46.5974 125.547 46.6565C125.803 46.7156 126.079 46.6565 126.335 46.4399C126.591 46.2429 126.945 45.849 127.358 45.2976C127.398 45.2582 127.457 45.2582 127.536 45.337C127.614 45.3961 127.654 45.4551 127.614 45.4945C127.24 45.9869 126.945 46.3808 126.709 46.6565L125.37 48.3897L124.149 50.0637C123.933 50.3789 123.638 50.7924 123.244 51.3242C123.224 51.3439 123.165 51.3439 123.086 51.2651C123.008 51.1863 122.968 51.147 122.988 51.1273C123.401 50.5758 123.677 50.1425 123.795 49.8077C123.913 49.4926 123.913 49.2169 123.775 48.9608C123.638 48.7048 123.362 48.4291 122.929 48.114L113.046 40.7087C112.672 40.433 112.376 40.2557 112.16 40.2163C111.943 40.1572 111.727 40.1966 111.51 40.3345C111.293 40.4724 111.057 40.7284 110.762 41.1026C110.112 41.9889 109.856 42.8948 109.955 43.8599Z" fill="#E1B168" />
                        <path d="M144.624 29.3849C144.683 29.4637 144.703 29.5228 144.664 29.5622C144.211 29.9561 143.817 30.2712 143.522 30.4879L142.026 31.7286L140.313 33.2057C140.077 33.4224 139.762 33.7178 139.348 34.0526C139.309 34.092 139.25 34.0723 139.191 33.9738C139.132 33.8951 139.112 33.836 139.151 33.7966C139.663 33.3633 140.018 33.0088 140.195 32.7528C140.372 32.4967 140.411 32.221 140.333 31.965C140.254 31.7089 140.037 31.3741 139.683 30.9408L135.706 26.2338L128.717 32.1422L132.694 36.8493C133.028 37.2629 133.343 37.5189 133.58 37.6568C133.816 37.7749 134.092 37.7749 134.387 37.6568C134.682 37.5189 135.096 37.2432 135.608 36.8099C135.627 36.7902 135.686 36.8099 135.745 36.8887C135.824 36.9675 135.844 37.0265 135.804 37.0462C135.352 37.4401 134.978 37.7356 134.702 37.9325L132.989 39.3505L131.513 40.6307C131.276 40.867 130.902 41.1821 130.449 41.5564C130.43 41.576 130.371 41.5563 130.312 41.4776C130.253 41.3988 130.233 41.3397 130.253 41.32C130.745 40.9064 131.079 40.5716 131.237 40.2959C131.414 40.0398 131.453 39.7641 131.375 39.5081C131.296 39.2324 131.079 38.8975 130.725 38.5036L122.752 29.0698C122.397 28.6562 122.102 28.4002 121.866 28.282C121.629 28.1639 121.354 28.1639 121.058 28.282C120.763 28.4002 120.389 28.6562 119.897 29.0698C119.877 29.0895 119.818 29.0698 119.759 28.991C119.68 28.9123 119.661 28.8532 119.7 28.8335L120.803 27.9472C121.452 27.4548 121.944 27.0413 122.299 26.7458C122.771 26.3519 123.323 25.8596 123.953 25.2687L125.016 24.3431C125.035 24.3234 125.094 24.3431 125.153 24.4218C125.213 24.5006 125.232 24.5597 125.213 24.5794C124.701 25.0127 124.366 25.3672 124.208 25.6429C124.031 25.9187 123.992 26.1944 124.071 26.4701C124.149 26.7458 124.366 27.0806 124.701 27.4942L128.225 31.6498L135.214 25.7414L131.69 21.5858C131.355 21.1722 131.04 20.9162 130.804 20.7783C130.548 20.6601 130.272 20.6404 129.977 20.7586C129.682 20.8768 129.268 21.1525 128.756 21.5858C128.717 21.6252 128.658 21.6055 128.599 21.507C128.52 21.4282 128.52 21.3691 128.559 21.3298L129.544 20.5223C130.213 19.9905 130.804 19.5178 131.316 19.1042C131.69 18.7891 132.162 18.3558 132.773 17.8044L133.875 16.8393C133.914 16.7999 133.973 16.8196 134.033 16.9181C134.111 16.9969 134.111 17.056 134.072 17.0954C133.58 17.509 133.265 17.8438 133.088 18.1195C132.93 18.3755 132.891 18.6513 132.969 18.9073C133.048 19.1633 133.265 19.4981 133.599 19.9117L141.573 29.3456C141.908 29.7591 142.223 30.0152 142.459 30.153C142.715 30.2909 142.971 30.2909 143.246 30.153C143.522 30.0349 143.916 29.7591 144.408 29.3456C144.506 29.2865 144.565 29.3062 144.624 29.3849Z" fill="#E1B168" />
                        <path d="M154.409 19.7933C154.448 19.7736 154.508 19.7539 154.567 19.7539C154.626 19.7539 154.645 19.7736 154.665 19.7736C155.157 21.0537 155.649 22.1763 156.181 23.1808C156.24 23.2989 156.279 23.4171 156.26 23.4959C156.24 23.5747 156.161 23.6535 156.023 23.7322L145.806 29.2074C145.766 29.2271 145.707 29.2074 145.668 29.1089C145.609 29.0104 145.609 28.9514 145.668 28.9317C146.199 28.6362 146.573 28.3999 146.77 28.1833C146.967 27.9666 147.046 27.7303 147.026 27.4546C147.007 27.1788 146.849 26.8046 146.593 26.3319L140.766 15.4407C140.51 14.968 140.293 14.6529 140.077 14.4757C139.88 14.2984 139.624 14.2393 139.328 14.2787C139.033 14.3378 138.62 14.4954 138.108 14.7711C138.068 14.7908 138.009 14.7711 137.97 14.6726C137.911 14.5741 137.911 14.515 137.97 14.4954L147.755 9.25653C147.912 9.17775 148.03 9.19744 148.109 9.33531L149.802 12.3683C149.822 12.4077 149.783 12.4471 149.704 12.5062C149.625 12.5653 149.566 12.585 149.527 12.5456C148.188 10.9503 146.633 10.6549 144.821 11.6199L143.876 12.132C143.305 12.4274 142.971 12.7425 142.833 13.0773C142.715 13.4121 142.774 13.8257 143.03 14.2984L145.609 19.1039L147.873 17.8829C149.605 16.9572 150.157 15.9134 149.527 14.7514C149.507 14.712 149.527 14.6529 149.625 14.6135C149.723 14.5741 149.763 14.5741 149.783 14.6135L150.865 16.6815L151.476 17.7844C151.771 18.2768 152.007 18.6707 152.184 18.9858C152.204 19.0252 152.165 19.0646 152.066 19.1039C151.968 19.163 151.909 19.163 151.909 19.1433C151.18 17.7844 149.94 17.5874 148.188 18.5328L145.884 19.6948L148.739 25.0321C149.015 25.5442 149.31 25.8593 149.605 25.9577C149.92 26.0562 150.314 25.9774 150.806 25.7017L151.968 25.0912C154.074 23.9686 154.862 22.2354 154.33 19.8917C154.311 19.8523 154.35 19.8327 154.409 19.7933Z" fill="#E1B168" />
                        <path d="M161.91 5.45524C161.378 6.26273 161.083 7.36564 161.024 8.76397C161.024 8.80336 160.985 8.82305 160.886 8.84275C160.788 8.86244 160.729 8.84275 160.729 8.80336C160.65 8.11404 160.512 7.22777 160.355 6.14456C160.197 5.06134 160.059 4.25385 159.922 3.7024C159.902 3.62362 159.941 3.56453 160.04 3.54484C160.138 3.52514 160.197 3.54484 160.217 3.64331C160.315 4.01752 160.827 4.09629 161.812 3.87965C163.308 3.58423 165.06 3.21003 167.048 2.73735C168.072 2.50101 169.155 2.22529 170.297 1.92986L172.049 1.49658C172.718 1.33902 173.191 1.18146 173.467 1.0239C173.742 0.866342 173.9 0.649699 173.939 0.373971C173.939 0.295192 173.978 0.255802 174.077 0.236107C174.156 0.216413 174.215 0.236107 174.234 0.314887C174.313 0.866342 174.451 1.69353 174.648 2.79644C174.845 3.89935 175.022 4.78561 175.179 5.47493C175.199 5.53402 175.16 5.57341 175.061 5.5931C174.963 5.6128 174.904 5.5931 174.864 5.55371C174.372 4.25385 173.742 3.36759 172.955 2.89491C172.167 2.40254 171.222 2.30406 170.139 2.5404C169.647 2.65857 169.313 2.77674 169.096 2.9146C168.879 3.05247 168.761 3.24942 168.742 3.48575C168.722 3.72209 168.761 4.0766 168.86 4.54928L171.636 16.5434C171.754 17.0752 171.911 17.4494 172.069 17.6857C172.226 17.9024 172.482 18.0205 172.797 18.0402C173.132 18.0599 173.644 17.9812 174.313 17.8236C174.372 17.8039 174.392 17.863 174.431 17.9615C174.451 18.0599 174.431 18.119 174.392 18.1387C173.782 18.2766 173.309 18.375 172.955 18.4538L170.809 18.9265L168.781 19.4189C168.427 19.5173 167.915 19.6552 167.285 19.7931C167.245 19.7931 167.226 19.7537 167.206 19.6552C167.186 19.5567 167.186 19.4977 167.226 19.4977C167.895 19.3401 168.387 19.1825 168.683 19.025C168.978 18.8674 169.155 18.6508 169.214 18.375C169.273 18.0993 169.234 17.7054 169.116 17.1737L166.32 5.14012C166.222 4.68714 166.103 4.37202 165.966 4.17507C165.828 3.97813 165.631 3.87965 165.395 3.84026C165.158 3.80087 164.784 3.84026 164.332 3.95843C163.249 4.11599 162.461 4.64775 161.91 5.45524Z" fill="#E1B168" />
                        <path d="M195.576 16.4255C195.576 16.524 195.536 16.583 195.438 16.583C195.103 16.6027 194.552 16.6027 193.804 16.583C193.056 16.5634 192.504 16.583 192.17 16.583C191.717 16.6027 191.205 16.6421 190.595 16.6815C189.984 16.7406 189.532 16.78 189.177 16.78C189.098 16.78 189.059 16.7209 189.059 16.6224C189.059 16.524 189.098 16.4649 189.158 16.4649C189.669 16.4452 190.043 16.3664 190.28 16.2482C190.516 16.1301 190.634 15.9331 190.614 15.6574C190.595 15.3817 190.437 14.9484 190.122 14.3181L187.031 8.56725L182.208 8.72481L180.318 13.4122C180.101 13.9439 180.003 14.4363 180.023 14.8696C180.042 15.4998 180.278 15.9528 180.731 16.2679C181.184 16.5634 181.814 16.7209 182.621 16.6815C182.7 16.6815 182.759 16.7209 182.759 16.8391C182.759 16.9376 182.72 16.9966 182.641 16.9966C182.326 17.0163 181.853 17.0163 181.243 16.9966C180.574 16.9769 179.983 16.9966 179.471 16.9966C178.999 17.0163 178.428 17.0557 177.798 17.1148C177.227 17.1739 176.754 17.2133 176.38 17.2133C176.302 17.2133 176.243 17.1739 176.243 17.0557C176.243 16.9573 176.282 16.8982 176.38 16.8982C176.873 16.8785 177.286 16.7603 177.621 16.5634C177.955 16.3467 178.27 15.9922 178.566 15.4801C178.881 14.9681 179.215 14.2 179.629 13.1758L184.905 0.0590845C184.984 0.0393897 185.063 0 185.2 0C185.318 0 185.397 0.0196948 185.417 0.0787793L192.406 13.038C193.075 14.2984 193.627 15.165 194.06 15.618C194.493 16.071 194.946 16.2876 195.438 16.2679C195.517 16.2679 195.556 16.3073 195.576 16.4255ZM182.503 8.07488L186.716 7.93702L184.354 3.52537L182.503 8.07488Z" fill="#E1B168" />
                        <path d="M201.383 5.63274C201.62 6.18419 201.954 6.67656 202.388 7.12954C202.801 7.58252 203.392 8.11429 204.14 8.76421C204.947 9.47323 205.577 10.0641 206.03 10.5564C206.483 11.0488 206.837 11.62 207.113 12.2699C207.368 12.9198 207.447 13.6288 207.309 14.4166C207.172 15.3226 206.798 16.071 206.227 16.7012C205.656 17.3315 204.908 17.7648 203.982 18.0208C203.057 18.2768 202.053 18.3162 200.97 18.139C200.222 18.0208 199.493 17.8041 198.745 17.489C197.997 17.1739 197.446 16.8391 197.072 16.4846C196.934 16.3467 196.875 16.1695 196.895 15.9331L197.387 11.8957V11.876C197.407 11.7972 197.446 11.7775 197.544 11.7775C197.623 11.7775 197.682 11.8169 197.682 11.8957C198.017 13.4516 198.489 14.7514 199.1 15.7953C199.69 16.8391 200.576 17.4693 201.738 17.6466C202.486 17.7648 203.155 17.6663 203.726 17.3315C204.297 16.9967 204.671 16.3467 204.829 15.3817C204.947 14.6136 204.888 13.9046 204.652 13.2743C204.415 12.6441 204.061 12.0926 203.628 11.62C203.195 11.1473 202.584 10.5761 201.817 9.86713C201.068 9.17781 200.478 8.62635 200.064 8.15367C199.651 7.681 199.316 7.16893 199.08 6.55839C198.844 5.94785 198.765 5.27823 198.883 4.52983C199.041 3.62386 199.415 2.89515 200.025 2.3437C200.635 1.79224 201.383 1.43774 202.25 1.26048C203.116 1.08323 204.002 1.06353 204.888 1.22109C205.478 1.31957 206.069 1.47713 206.64 1.67407C207.211 1.89072 207.703 2.10736 208.077 2.3437C208.235 2.42248 208.313 2.50126 208.353 2.59973C208.392 2.67851 208.412 2.79668 208.392 2.91485L207.9 6.519C207.9 6.57809 207.841 6.59778 207.743 6.61748C207.644 6.63717 207.585 6.59778 207.585 6.519C207.408 5.3964 207.093 4.35257 206.64 3.38753C206.187 2.42248 205.38 1.85133 204.199 1.65438C203.411 1.53621 202.742 1.65438 202.21 2.02858C201.679 2.40278 201.344 2.99363 201.206 3.78142C201.068 4.47074 201.147 5.06159 201.383 5.63274Z" fill="#E1B168" />
                        <path d="M215.165 5.37656C214.279 5.77046 213.432 6.53856 212.625 7.68086C212.605 7.72025 212.566 7.72025 212.468 7.68086C212.369 7.64147 212.349 7.60208 212.349 7.56269C212.645 6.93246 213.019 6.12497 213.491 5.12053C213.964 4.1161 214.259 3.36769 214.456 2.83593C214.495 2.75715 214.554 2.71776 214.633 2.75715C214.732 2.79654 214.751 2.85563 214.732 2.93441C214.594 3.30861 215.007 3.66311 215.933 3.99793C217.35 4.56908 219.023 5.19931 220.953 5.88863C221.937 6.24314 223 6.59764 224.103 6.97185L225.816 7.56269C226.446 7.79903 226.938 7.9172 227.253 7.93689C227.568 7.95659 227.824 7.85811 228.001 7.64147C228.04 7.58239 228.099 7.56269 228.178 7.60208C228.257 7.64147 228.296 7.68086 228.277 7.73994C228.04 8.23232 227.706 9.02011 227.273 10.0442C226.839 11.0881 226.505 11.9349 226.268 12.5849C226.249 12.644 226.19 12.644 226.111 12.6046C226.013 12.5652 225.973 12.5258 225.973 12.4667C226.268 11.1078 226.209 10.0245 225.816 9.19736C225.422 8.37018 224.693 7.75964 223.63 7.38544C223.158 7.20818 222.803 7.1294 222.548 7.1294C222.292 7.1294 222.095 7.22788 221.937 7.40513C221.78 7.58239 221.622 7.8975 221.465 8.35048L217.291 19.931C217.114 20.4431 217.015 20.837 217.035 21.1127C217.055 21.3885 217.193 21.6051 217.468 21.8021C217.744 21.999 218.197 22.2156 218.866 22.452C218.925 22.4717 218.925 22.5308 218.886 22.6292C218.846 22.7277 218.807 22.7671 218.748 22.7474C218.157 22.5308 217.704 22.3535 217.37 22.2156L215.322 21.4475L213.353 20.7582C212.999 20.6401 212.507 20.4825 211.877 20.2659C211.838 20.2462 211.838 20.1871 211.877 20.0886C211.916 19.9901 211.956 19.9507 211.975 19.9507C212.625 20.1871 213.117 20.3249 213.472 20.3446C213.806 20.3643 214.082 20.2856 214.279 20.0886C214.476 19.8917 214.673 19.5371 214.85 19.0251L219.043 7.38544C219.201 6.95215 219.279 6.61734 219.26 6.381C219.24 6.14466 219.142 5.94772 218.964 5.79016C218.768 5.6326 218.453 5.47504 218 5.29779C217.015 4.98267 216.051 4.98267 215.165 5.37656Z" fill="#E1B168" />
                        <path d="M236.053 27.2182C236.093 27.2379 236.132 27.2773 236.152 27.3364C236.171 27.3954 236.191 27.4151 236.171 27.4348C235.325 28.518 234.616 29.5225 234.045 30.4875C233.966 30.6057 233.907 30.6845 233.828 30.7042C233.75 30.7239 233.651 30.7042 233.513 30.6254L223.532 24.7366C223.493 24.7169 223.493 24.6579 223.552 24.5594C223.611 24.4609 223.65 24.4412 223.709 24.4609C224.221 24.776 224.634 24.9533 224.91 25.0124C225.186 25.0714 225.442 25.0124 225.658 24.8548C225.875 24.6775 226.111 24.3624 226.387 23.9094L232.667 13.2545C232.943 12.8016 233.1 12.4274 233.139 12.1713C233.179 11.9153 233.1 11.6593 232.903 11.4229C232.706 11.1866 232.352 10.9306 231.86 10.6351C231.82 10.6154 231.82 10.5563 231.879 10.4579C231.938 10.3594 231.978 10.3397 232.037 10.3594L241.605 16.0118C241.763 16.1103 241.802 16.2088 241.703 16.3466L239.991 19.3599C239.971 19.3993 239.912 19.3796 239.833 19.3599C239.735 19.3206 239.695 19.2812 239.715 19.2221C240.384 17.2526 239.833 15.7558 238.061 14.712L237.136 14.1802C236.585 13.8454 236.132 13.7272 235.797 13.7863C235.443 13.8454 235.128 14.1211 234.852 14.5938L232.076 19.2812L234.281 20.581C235.974 21.5855 237.156 21.5067 237.805 20.3644C237.825 20.325 237.884 20.325 237.983 20.3644C238.061 20.4235 238.101 20.4629 238.061 20.5022L236.86 22.4914L236.25 23.5943C235.994 24.1064 235.778 24.52 235.6 24.8154C235.581 24.8548 235.522 24.8351 235.443 24.776C235.344 24.7169 235.305 24.6775 235.325 24.6579C236.093 23.3383 235.64 22.1763 233.927 21.1522L231.742 19.872L228.67 25.0911C228.375 25.6032 228.257 25.9971 228.336 26.3122C228.414 26.6273 228.69 26.9228 229.182 27.2182L230.304 27.8878C232.352 29.1089 234.242 28.8725 235.974 27.1985C235.955 27.1788 235.994 27.1985 236.053 27.2182Z" fill="#E1B168" />
                        <path d="M248.968 43.6634C248.889 43.7422 248.83 43.7422 248.752 43.6831C248.496 43.4467 248.102 43.0725 247.57 42.5605C247.039 42.0287 246.645 41.6545 246.389 41.4182C246.054 41.1227 245.661 40.7879 245.188 40.394C244.716 40.0198 244.361 39.7047 244.105 39.4881C244.046 39.4487 244.066 39.3699 244.125 39.2911C244.204 39.2123 244.263 39.1926 244.322 39.2517C244.696 39.6062 245.031 39.8032 245.287 39.882C245.543 39.9607 245.759 39.9017 245.936 39.7047C246.113 39.5078 246.31 39.0745 246.507 38.3852L248.279 32.1025L244.696 28.8529L240.069 30.9011C239.538 31.1375 239.124 31.4132 238.849 31.748C238.435 32.201 238.278 32.713 238.396 33.2448C238.514 33.7766 238.868 34.3083 239.459 34.8598C239.518 34.9189 239.518 34.9976 239.459 35.0764C239.38 35.1552 239.321 35.1552 239.262 35.0961C239.026 34.8795 238.691 34.5644 238.258 34.1311C237.786 33.6584 237.353 33.2448 236.998 32.91C236.644 32.5949 236.211 32.2207 235.718 31.8268C235.266 31.4723 234.911 31.1768 234.636 30.9208C234.577 30.8617 234.577 30.7829 234.636 30.7042C234.714 30.6254 234.773 30.6057 234.833 30.6648C235.207 30.9996 235.581 31.2162 235.955 31.295C236.329 31.3738 236.821 31.3344 237.392 31.1768C237.963 31.0193 238.75 30.7042 239.754 30.2709L252.669 24.5397C252.728 24.52 252.807 24.5594 252.906 24.6382C253.004 24.7169 253.024 24.7957 253.004 24.8351L249.008 39.0154C248.614 40.394 248.417 41.3788 248.397 42.009C248.397 42.6392 248.555 43.1119 248.929 43.4467C249.027 43.5058 249.027 43.5846 248.968 43.6634ZM245.385 28.5771L248.515 31.4132L249.874 26.6076L245.385 28.5771Z" fill="#E1B168" />
                        <path d="M260.761 35.0963C259.796 34.9387 258.674 35.0963 257.375 35.6084C257.355 35.6281 257.296 35.6084 257.237 35.5296C257.178 35.4508 257.178 35.3917 257.217 35.372C257.808 35.0175 258.576 34.5449 259.521 33.954C260.446 33.3632 261.135 32.9102 261.568 32.5754C261.647 32.5163 261.706 32.536 261.765 32.6148C261.824 32.6935 261.824 32.7526 261.745 32.8117C261.43 33.048 261.568 33.5601 262.159 34.3676C263.025 35.6281 264.088 37.0855 265.309 38.7202C265.939 39.567 266.608 40.4533 267.356 41.3593L268.459 42.797C268.872 43.3484 269.187 43.703 269.443 43.8999C269.699 44.0968 269.955 44.1559 270.231 44.0575C270.29 44.0378 270.368 44.0575 270.408 44.1165C270.467 44.1953 270.447 44.2347 270.408 44.2938C269.935 44.5892 269.227 45.0422 268.301 45.6724C267.376 46.3027 266.628 46.8147 266.077 47.2283C266.037 47.2677 265.978 47.2283 265.919 47.1495C265.86 47.0708 265.84 47.0117 265.88 46.9723C266.864 46.0072 267.435 45.0619 267.553 44.1559C267.671 43.25 267.415 42.3243 266.726 41.438C266.431 41.0441 266.175 40.7684 265.958 40.6306C265.742 40.4927 265.525 40.4533 265.289 40.5321C265.053 40.6109 264.758 40.7684 264.364 41.0638L254.5 48.4297C254.067 48.7645 253.772 49.0402 253.634 49.2766C253.496 49.5129 253.496 49.7887 253.614 50.1038C253.733 50.4189 254.008 50.8522 254.422 51.4036C254.461 51.443 254.422 51.5021 254.343 51.5612C254.264 51.6203 254.205 51.64 254.166 51.6006C253.792 51.1082 253.516 50.6946 253.299 50.3992L252.02 48.6267L250.76 46.9723C250.523 46.6769 250.208 46.283 249.815 45.7512C249.795 45.7315 249.834 45.6724 249.913 45.6133C249.992 45.5543 250.051 45.5346 250.071 45.5543C250.484 46.1057 250.819 46.4996 251.094 46.6966C251.37 46.9132 251.626 46.992 251.902 46.9132C252.177 46.8541 252.532 46.6572 252.965 46.3421L262.868 38.9565C263.242 38.6808 263.478 38.4444 263.596 38.2475C263.714 38.0505 263.734 37.8339 263.675 37.5976C263.616 37.3612 263.438 37.0461 263.143 36.6522C262.513 35.7659 261.726 35.2539 260.761 35.0963Z" fill="#E1B168" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_13">
                            <rect width="378" height="188" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>


        </div>
    )
}

export default LoadingInfo;
