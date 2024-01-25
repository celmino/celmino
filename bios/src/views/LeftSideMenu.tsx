import { Convert, EventBus, is } from "@tuval/core"
import {
    HDivider, Spacer, VStack, cTopLeading, HStack, Color, PositionTypes, UIImage, ForEach, useState,
    Text, Spinner, ReactView, UIRouteLink, PopupButton,  useEffect, TooltipPositions, DialogPosition, getAppName, getAppFullName, Fragment, useNavigate
} from "@tuval/forms"
import React from "react"

import { RealmOceanDataContext } from "../DataContext"
import { useDeleteSession, useDeleteSessions, useUpdatePrefs } from "@realmocean/sdk"



export const svgElement = (
    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5063 0.983153C0.782691 2.23087 0.3638 4.68688 1.57068 6.46881L11.7573 21.509C12.5031 22.6101 13.6951 23.1962 14.9037 23.1889C16.1107 23.1945 17.3004 22.6086 18.0451 21.509L28.2344 6.46481C29.4413 4.68289 29.0224 2.22688 27.2988 0.979157C25.5752 -0.268562 23.1995 0.164499 21.9927 1.94643L14.9012 12.4168L7.81243 1.95042C6.60555 0.168496 4.22991 -0.264566 2.5063 0.983153Z" fill="#D7D7FF"></path>
        <path d="M2.50923 23.8352C0.785618 22.5875 0.366728 20.1315 1.57361 18.3495L11.7558 3.31581C12.499 2.21855 13.6853 1.63274 14.8897 1.6359C16.1013 1.62581 17.2971 2.21204 18.0447 3.3157L28.2269 18.3495C29.4338 20.1315 29.0149 22.5875 27.2913 23.8352C25.5677 25.0829 23.1921 24.6499 21.9852 22.8679L14.9003 12.4073L7.81536 22.8679C6.60848 24.6499 4.23284 25.0829 2.50923 23.8352Z" fill="url(#paint0_linear_1640_88925)"></path>
        <path d="M10.2475 19.2773L5.59619 12.4098L10.2475 5.54228L14.8988 12.4098L10.2475 19.2773Z" fill="#C1C1FF"></path>
        <defs><linearGradient id="paint0_linear_1640_88925" x1="18.3366" y1="19.6173" x2="15.7336" y2="1.25856" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8F8FFF"></stop><stop offset="1" stop-color="#C2C2FF"></stop></linearGradient></defs>
    </svg>
)

export const notifyElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M10 2.04999C10.4143 2.04999 10.75 2.38577 10.75 2.79999V3.61058C12.0546 3.75821 13.2785 4.34336 14.2159 5.28079C15.309 6.37389 15.9231 7.85644 15.9231 9.4023C15.9231 11.7406 16.1727 13.0548 16.3959 13.758C16.5068 14.1075 16.6088 14.2984 16.6645 14.3868C16.6835 14.4168 16.697 14.435 16.7038 14.4435C16.9179 14.6455 16.9953 14.9565 16.8964 15.2377C16.7908 15.538 16.5072 15.7389 16.1889 15.7389H12.9529C12.9516 15.8038 12.9418 15.8695 12.9226 15.9348C12.7439 16.5449 12.3725 17.0809 11.864 17.4623C11.3554 17.8437 10.7371 18.05 10.1015 18.05C9.46584 18.05 8.84746 17.8437 8.33891 17.4623C7.83037 17.0809 7.45905 16.5449 7.28027 15.9348C7.26115 15.8695 7.2513 15.8038 7.24997 15.7389H4.00001C3.71313 15.7389 3.45138 15.5752 3.32575 15.3173C3.20248 15.0643 3.23145 14.764 3.39963 14.5394C3.40133 14.5369 3.40486 14.5316 3.41004 14.5235C3.42459 14.5005 3.45231 14.4542 3.48918 14.3812C3.56285 14.2352 3.67358 13.9813 3.78854 13.5917C4.01863 12.812 4.26574 11.4886 4.26574 9.4023C4.26574 7.85644 4.87984 6.37389 5.97293 5.28079C6.865 4.38872 8.01646 3.81567 9.25004 3.63507V2.79999C9.25004 2.38577 9.58582 2.04999 10 2.04999ZM8.80705 15.7389C8.90698 15.9443 9.05465 16.1241 9.2389 16.2623C9.488 16.4491 9.79062 16.55 10.1015 16.55C10.4123 16.55 10.7149 16.4491 10.964 16.2623C11.1483 16.1241 11.2959 15.9443 11.3959 15.7389H8.80705ZM7.03359 6.34145C7.84538 5.52967 8.9464 5.07361 10.0944 5.07361C11.2425 5.07361 12.3435 5.52967 13.1553 6.34145C13.9671 7.15324 14.4231 8.25426 14.4231 9.4023C14.4231 11.8353 14.6814 13.3144 14.9661 14.2117L14.9748 14.2389H5.15815C5.18119 14.1682 5.20426 14.0941 5.22721 14.0163C5.50499 13.075 5.76574 11.6052 5.76574 9.4023C5.76574 8.25426 6.2218 7.15324 7.03359 6.34145Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
)

export const boxElement = (<svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M1.91632 11.0669C1.91632 10.6527 2.25211 10.3169 2.66632 10.3169H7.44893C7.86314 10.3169 8.19893 10.6527 8.19893 11.0669V11.6764C8.19893 11.9011 8.40478 12.1455 8.72429 12.1455H11.5939C11.9134 12.1455 12.1192 11.9011 12.1192 11.6764V11.0669C12.1192 10.6527 12.455 10.3169 12.8692 10.3169H17.333C17.7472 10.3169 18.083 10.6527 18.083 11.0669V13.3336C18.083 14.8523 16.8518 16.0836 15.333 16.0836H4.66632C3.14754 16.0836 1.91632 14.8523 1.91632 13.3336V11.0669ZM3.41632 11.8169V13.3336C3.41632 14.0239 3.97597 14.5836 4.66632 14.5836H15.333C16.0233 14.5836 16.583 14.0239 16.583 13.3336V11.8169H13.6142C13.5391 12.8634 12.6313 13.6455 11.5939 13.6455H8.72429C7.68683 13.6455 6.77904 12.8634 6.70395 11.8169H3.41632Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M5.84564 5.41675C5.59751 5.41675 5.37654 5.57371 5.29484 5.808L3.37482 11.3137C3.23843 11.7048 2.8108 11.9113 2.41968 11.7749C2.02857 11.6385 1.82208 11.2109 1.95847 10.8198L3.87849 5.31407C4.17029 4.47733 4.95947 3.91675 5.84564 3.91675H14.1543C15.0405 3.91675 15.8297 4.47733 16.1215 5.31407L18.0415 10.8198C18.1779 11.2109 17.9714 11.6385 17.5803 11.7749C17.1892 11.9113 16.7615 11.7048 16.6251 11.3137L14.7051 5.808C14.6234 5.57371 14.4024 5.41675 14.1543 5.41675H5.84564Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>)

export const myTaskElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M5.99986 1.82129C6.41407 1.82129 6.74986 2.15708 6.74986 2.57129V4.10701H13.2499V2.57129C13.2499 2.15708 13.5856 1.82129 13.9999 1.82129C14.4141 1.82129 14.7499 2.15708 14.7499 2.57129V4.107H16.2856C16.7876 4.107 17.269 4.30643 17.624 4.66141C17.979 5.01639 18.1784 5.49784 18.1784 5.99986V16.2856C18.1784 16.7876 17.979 17.269 17.624 17.624C17.269 17.979 16.7876 18.1784 16.2856 18.1784H3.71415C3.21213 18.1784 2.73067 17.979 2.37569 17.624C2.02071 17.269 1.82129 16.7876 1.82129 16.2856V5.99986C1.82129 5.49784 2.02071 5.01639 2.37569 4.66141C2.73067 4.30643 3.21213 4.107 3.71415 4.107C3.763 4.107 3.81077 4.11168 3.85702 4.1206C3.90326 4.11168 3.95102 4.10701 3.99986 4.10701H5.24986V2.57129C5.24986 2.15708 5.58565 1.82129 5.99986 1.82129ZM5.24986 7.14272V5.60701H3.99986C3.95101 5.60701 3.90324 5.60234 3.85699 5.59342C3.81075 5.60233 3.76299 5.607 3.71415 5.607C3.60995 5.607 3.51003 5.64839 3.43635 5.72207C3.36268 5.79574 3.32129 5.89567 3.32129 5.99986V16.2856C3.32129 16.3898 3.36268 16.4897 3.43635 16.5634C3.51003 16.637 3.60995 16.6784 3.71415 16.6784H16.2856C16.3898 16.6784 16.4897 16.637 16.5634 16.5634C16.637 16.4897 16.6784 16.3898 16.6784 16.2856V5.99986C16.6784 5.89567 16.637 5.79574 16.5634 5.72207C16.4897 5.64839 16.3898 5.607 16.2856 5.607H14.7499V7.14272C14.7499 7.55693 14.4141 7.89272 13.9999 7.89272C13.5856 7.89272 13.2499 7.55693 13.2499 7.14272V5.60701H6.74986V7.14272C6.74986 7.55693 6.41407 7.89272 5.99986 7.89272C5.58565 7.89272 5.24986 7.55693 5.24986 7.14272ZM13.4214 9.92231C13.6942 9.61058 13.6626 9.13676 13.3509 8.864C13.0392 8.59124 12.5653 8.62283 12.2926 8.93455L8.75058 12.9825L7.02129 11.6856C6.68992 11.437 6.21982 11.5042 5.97129 11.8356C5.72276 12.1669 5.78992 12.637 6.12129 12.8856L8.407 14.5999C8.72086 14.8353 9.16309 14.789 9.42144 14.4937L13.4214 9.92231Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
)

export const myFavoritesElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M10 3.90449L8.30061 7.34943C8.20168 7.5491 8.05582 7.72182 7.87554 7.85278C7.69525 7.98374 7.4859 8.06904 7.26543 8.10138L3.46267 8.65796L6.21005 11.3431C6.21018 11.3432 6.20992 11.343 6.21005 11.3431C6.37003 11.499 6.48998 11.6919 6.55878 11.9044C6.6275 12.1167 6.64348 12.3425 6.60534 12.5624C6.60528 12.5628 6.60521 12.5632 6.60514 12.5636L5.95599 16.3534L9.3594 14.563C9.5569 14.4592 9.77687 14.4048 10 14.4048C10.2231 14.4048 10.4429 14.4591 10.6404 14.5629L14.0349 16.3477L13.3857 12.5579C13.3856 12.5574 13.3856 12.5569 13.3855 12.5565C13.3474 12.3367 13.3634 12.1109 13.4321 11.8987C13.5009 11.6862 13.6204 11.4936 13.7804 11.3378C13.7805 11.3376 13.7803 11.3379 13.7804 11.3378L16.5322 8.65463L12.7353 8.10149C12.5148 8.06915 12.3048 7.98374 12.1245 7.85278C11.9442 7.72182 11.7983 7.54911 11.6994 7.34943L10 3.90449ZM10.5623 3.34904L11.2344 3.01626C11.1205 2.78619 10.9446 2.59254 10.7265 2.45714C10.5083 2.32175 10.2567 2.25 10 2.25C9.74328 2.25 9.49166 2.32175 9.27355 2.45714C9.05543 2.59254 8.87949 2.78619 8.76558 3.01626L6.98466 6.6265L2.99539 7.21037L2.99209 7.21086C2.73857 7.24912 2.50078 7.35743 2.30552 7.52359C2.11027 7.68974 1.9653 7.90714 1.88697 8.15127C1.80864 8.39539 1.80006 8.65655 1.8622 8.90529C1.92422 9.15357 2.05423 9.37963 2.23762 9.55808C2.23796 9.55842 2.2383 9.55875 2.23865 9.55909L5.11621 12.3715L4.43615 16.3417C4.43605 16.3422 4.43594 16.3428 4.43584 16.3434C4.39159 16.5975 4.41961 16.8589 4.51674 17.0979C4.6141 17.3374 4.77694 17.5446 4.98662 17.6958C5.1963 17.8471 5.44434 17.9362 5.70233 17.953C5.95874 17.9697 6.21467 17.9142 6.44115 17.793L10 15.9209L13.5498 17.7874C13.7763 17.9085 14.0322 17.964 14.2885 17.9473C14.5465 17.9305 14.7946 17.8414 15.0042 17.6901C15.2139 17.5389 15.3768 17.3317 15.4741 17.0922C15.5712 16.8532 15.5993 16.5918 15.555 16.3378C15.5549 16.3372 15.5548 16.3365 15.5547 16.3359L14.8747 12.3658L17.7568 9.55566C17.7571 9.55536 17.7574 9.55505 17.7577 9.55475C17.9412 9.37628 18.0712 9.15018 18.1332 8.90186C18.1954 8.65312 18.1868 8.39196 18.1085 8.14784C18.0301 7.90371 17.8852 7.68632 17.6899 7.52016C17.4946 7.354 17.2569 7.24569 17.0033 7.20743L13.0153 6.62645L11.2349 3.01724L10.5623 3.34904Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
)

export const applicationsElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M5.6579 4.88C5.6579 3.28943 6.9472 2 8.53766 2C10.1281 2 11.4174 3.28943 11.4174 4.88C11.4174 4.89526 11.4173 4.91051 11.4171 4.92572H13.0502C14.1675 4.92572 15.0732 5.83153 15.0732 6.94891V8.58332C15.0889 8.58307 15.1045 8.58295 15.1202 8.58295C16.7107 8.58295 18 9.87237 18 11.4629C18 13.0535 16.7107 14.3429 15.1202 14.3429C15.1045 14.3429 15.0889 14.3428 15.0732 14.3426V15.9768C15.0732 17.0942 14.1675 18 13.0502 18H4.02304C2.90574 18 2 17.0942 2 15.9768V13.5322C2 13.3096 2.10806 13.1009 2.28982 12.9723C2.47157 12.8438 2.70441 12.8115 2.91427 12.8858C3.07072 12.9411 3.23976 12.9715 3.41737 12.9715C4.25045 12.9715 4.9258 12.2961 4.9258 11.4629C4.9258 10.6298 4.25045 9.95437 3.41737 9.95437C3.23975 9.95437 3.07072 9.98478 2.91427 10.0401C2.70441 10.1143 2.47157 10.0821 2.28982 9.95353C2.10806 9.82501 2 9.61625 2 9.39363V6.9489C2 5.83153 2.90575 4.92572 4.02304 4.92572H5.65825C5.65802 4.91051 5.6579 4.89526 5.6579 4.88ZM8.53766 3.37143C7.70458 3.37143 7.02923 4.04683 7.02923 4.88C7.02923 5.05755 7.05961 5.22652 7.11489 5.38292C7.18906 5.5928 7.15675 5.82562 7.02824 6.00736C6.89972 6.1891 6.69099 6.29715 6.46841 6.29715H4.02304C3.66311 6.29715 3.37133 6.58895 3.37133 6.9489V8.5833C3.38665 8.58306 3.402 8.58294 3.41737 8.58294C5.00783 8.58294 6.29714 9.87237 6.29714 11.4629C6.29714 13.0535 5.00783 14.3429 3.41737 14.3429C3.402 14.3429 3.38665 14.3428 3.37133 14.3426V15.9768C3.37133 16.3368 3.66311 16.6286 4.02304 16.6286H13.0502C13.4101 16.6286 13.7019 16.3368 13.7019 15.9768V13.5319C13.7019 13.3092 13.81 13.1004 13.9918 12.9719C14.1737 12.8434 14.4066 12.8112 14.6165 12.8855C14.7731 12.941 14.9424 12.9715 15.1202 12.9715C15.9533 12.9715 16.6287 12.2961 16.6287 11.4629C16.6287 10.6298 15.9533 9.95438 15.1202 9.95438C14.9424 9.95438 14.7731 9.98488 14.6165 10.0404C14.4066 10.1147 14.1737 10.0825 13.9918 9.95399C13.81 9.82548 13.7019 9.61667 13.7019 9.39399V6.94891C13.7019 6.58895 13.4101 6.29715 13.0502 6.29715H10.6069C10.3843 6.29715 10.1756 6.1891 10.0471 6.00736C9.91857 5.82562 9.88626 5.5928 9.96044 5.38292C10.0157 5.22652 10.0461 5.05755 10.0461 4.88C10.0461 4.04683 9.37074 3.37143 8.53766 3.37143Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
)

export const invitePeopleElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M7.27093 2.34404C7.7399 2.14979 8.24254 2.0498 8.75015 2.0498C9.25776 2.0498 9.7604 2.14979 10.2294 2.34404C10.6983 2.53829 11.1245 2.82302 11.4834 3.18195C11.8423 3.54088 12.127 3.967 12.3213 4.43597C12.5156 4.90494 12.6155 5.40758 12.6155 5.91519C12.6155 6.4228 12.5156 6.92544 12.3213 7.39441C12.127 7.86338 11.8423 8.28949 11.4834 8.64843C11.1245 9.00736 10.6983 9.29208 10.2294 9.48634C9.7604 9.68059 9.25776 9.78057 8.75015 9.78057C8.24254 9.78057 7.7399 9.68059 7.27093 9.48634C6.80196 9.29209 6.37584 9.00736 6.01691 8.64843C5.65798 8.28949 5.37325 7.86338 5.179 7.39441C4.98475 6.92544 4.88477 6.4228 4.88477 5.91519C4.88477 5.40758 4.98475 4.90494 5.179 4.43597C5.37325 3.967 5.65798 3.54088 6.01691 3.18195C6.37584 2.82302 6.80196 2.53829 7.27093 2.34404ZM8.75015 3.5498C8.43952 3.5498 8.13194 3.61099 7.84496 3.72986C7.55797 3.84873 7.29722 4.02296 7.07757 4.24261C6.85792 4.46226 6.68369 4.72301 6.56482 5.01C6.44595 5.29698 6.38477 5.60456 6.38477 5.91519C6.38477 6.22582 6.44595 6.5334 6.56482 6.82038C6.68369 7.10736 6.85792 7.36812 7.07757 7.58777C7.29722 7.80742 7.55798 7.98165 7.84496 8.10052C8.13194 8.21939 8.43952 8.28057 8.75015 8.28057C9.06078 8.28057 9.36836 8.21939 9.65534 8.10052C9.94232 7.98165 10.2031 7.80742 10.4227 7.58777C10.6424 7.36812 10.8166 7.10736 10.9355 6.82038C11.0544 6.5334 11.1155 6.22582 11.1155 5.91519C11.1155 5.60456 11.0544 5.29698 10.9355 5.01C10.8166 4.72301 10.6424 4.46226 10.4227 4.24261C10.2031 4.02296 9.94233 3.84873 9.65534 3.72986C9.36836 3.61099 9.06078 3.5498 8.75015 3.5498Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M8.33935 10.7312C8.3512 10.7307 8.36306 10.7305 8.37491 10.7305H9.12469C9.13838 10.7305 9.15198 10.7308 9.1655 10.7314 9.7888 10.7566 10.4024 10.8595 10.9888 11.0353 11.4913 11.1859 11.4963 11.8685 11.0942 12.2054 10.9063 12.3628 10.6558 12.4142 10.4202 12.3465 9.99646 12.2249 9.55476 12.1529 9.10634 12.1337H8.39335C7.53853 12.1703 6.70811 12.3988 5.97999 12.7977 5.24701 13.1992 4.64204 13.7602 4.22255 14.4273 3.80542 15.0907 3.58548 15.8372 3.58328 16.5965H9.12469L9.12963 16.5965H9.21466C9.47166 16.5965 9.69353 16.7699 9.78802 17.0089 9.96102 17.4465 9.67351 17.9997 9.203 17.9997H9.12509L9.12014 17.9997H2.79163C2.35443 17.9997 2 17.6856 2 17.2981V16.6097C1.9997 15.6068 2.2887 14.6203 2.83955 13.7443 3.39044 12.8682 4.18491 12.1314 5.14751 11.6041 6.1101 11.0767 7.20884 10.7762 8.33935 10.7312zM14.7002 11.5C15.1144 11.5 15.4502 11.8358 15.4502 12.25V14H17.2002C17.6144 14 17.9502 14.3358 17.9502 14.75 17.9502 15.1642 17.6144 15.5 17.2002 15.5H15.4502V17.25C15.4502 17.6642 15.1144 18 14.7002 18 14.286 18 13.9502 17.6642 13.9502 17.25V15.5H12.2002C11.786 15.5 11.4502 15.1642 11.4502 14.75 11.4502 14.3358 11.786 14 12.2002 14H13.9502V12.25C13.9502 11.8358 14.286 11.5 14.7002 11.5z" fill="currentColor"></path></svg>
)

export const searchElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
)

export const helpElement = (
    <svg viewBox="0 0 20 20" style={{ color: 'white' }} width="23" height="23" aria-hidden="true" className="icon_component surface-item-icon icon_component--no-focus-style"><path d="M10.4397 3.50655C9.93674 3.47178 9.43392 3.57593 8.98617 3.80762C8.53842 4.03931 8.16298 4.38962 7.90088 4.82027C7.63877 5.25092 7.5001 5.74533 7.5 6.24948C7.49992 6.66369 7.16407 6.99941 6.74986 6.99933C6.33564 6.99925 5.99992 6.6634 6 6.24919C6.00015 5.47006 6.21447 4.70597 6.61954 4.04042C7.02461 3.37487 7.60484 2.83347 8.29681 2.47541C8.98878 2.11734 9.76587 1.95638 10.5431 2.01012C11.3204 2.06386 12.068 2.33024 12.7041 2.78013C13.3402 3.23002 13.8404 3.84611 14.15 4.56107C14.4596 5.27604 14.5667 6.06236 14.4597 6.83409C14.3526 7.60582 14.0354 8.33327 13.5429 8.93693C13.0503 9.54059 12.4012 9.99723 11.6667 10.2569C11.4716 10.3259 11.3028 10.4537 11.1834 10.6226C11.064 10.7916 10.9999 10.9934 11 11.2003V12.3743C11 12.7885 10.6642 13.1243 10.25 13.1243C9.83579 13.1243 9.5 12.7885 9.5 12.3743V11.2011C9.49981 10.684 9.65995 10.1792 9.95838 9.75691C10.2569 9.33453 10.679 9.01513 11.1667 8.84273C11.642 8.67468 12.0619 8.37921 12.3807 7.9886C12.6994 7.598 12.9046 7.1273 12.9739 6.62794C13.0432 6.12858 12.9739 5.61979 12.7735 5.15717C12.5732 4.69454 12.2495 4.29589 11.8379 4.00479C11.4263 3.71368 10.9426 3.54132 10.4397 3.50655ZM10.25 15.1246C10.0151 15.1246 9.78555 15.1942 9.59026 15.3247C9.39498 15.4552 9.24277 15.6406 9.15289 15.8576C9.06301 16.0746 9.0395 16.3134 9.08532 16.5437C9.13114 16.7741 9.24423 16.9857 9.41031 17.1518C9.57639 17.3178 9.78798 17.4309 10.0183 17.4768C10.2487 17.5226 10.4874 17.4991 10.7044 17.4092C10.9214 17.3193 11.1069 17.1671 11.2374 16.9718C11.3679 16.7765 11.4375 16.5469 11.4375 16.3121C11.4375 15.9971 11.3124 15.6951 11.0897 15.4724C10.867 15.2497 10.5649 15.1246 10.25 15.1246Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
)

export const myProducts = (
    <svg viewBox="0 0 32 32" style={{ color: 'white' }} width="36" height="36" role="button" tabIndex={0} aria-hidden="false" className="icon_component icon_component--clickable icon_component--no-focus-style"><path d="M5 7.6551C5 6.19071 6.18712 5 7.65151 5 9.1159 5 10.303 6.19071 10.303 7.6551 10.303 9.11949 9.1159 10.3102 7.65151 10.3102 6.18712 10.3102 5 9.11949 5 7.6551zM5 15.9996C5 14.5352 6.18712 13.3445 7.65151 13.3445 9.1159 13.3445 10.303 14.5352 10.303 15.9996 10.303 17.464 9.1159 18.6547 7.65151 18.6547 6.18712 18.6547 5 17.464 5 15.9996zM7.65151 21.6899C6.18712 21.6899 5 22.8807 5 24.345 5 25.8094 6.18712 27.0001 7.65151 27.0001 9.1159 27.0001 10.303 25.8094 10.303 24.345 10.303 22.8807 9.1159 21.6899 7.65151 21.6899zM13.3333 7.6551C13.3333 6.19071 14.5204 5 15.9848 5 17.4491 5 18.6363 6.19071 18.6363 7.6551 18.6363 9.11949 17.4491 10.3102 15.9848 10.3102 14.5204 10.3102 13.3333 9.11949 13.3333 7.6551zM24.3483 5C22.8839 5 21.6968 6.19071 21.6968 7.6551 21.6968 9.11949 22.8839 10.3102 24.3483 10.3102 25.8127 10.3102 26.9998 9.11949 26.9998 7.6551 26.9998 6.19071 25.8127 5 24.3483 5zM13.3333 15.9996C13.3333 14.5352 14.5204 13.3445 15.9848 13.3445 17.4491 13.3445 18.6363 14.5352 18.6363 15.9996 18.6363 17.464 17.4491 18.6547 15.9848 18.6547 14.5204 18.6547 13.3333 17.464 13.3333 15.9996zM15.9848 21.6897C14.5204 21.6897 13.3333 22.8804 13.3333 24.3448 13.3333 25.8092 14.5204 26.9999 15.9848 26.9999 17.4491 26.9999 18.6363 25.8092 18.6363 24.3448 18.6363 22.8804 17.4491 21.6897 15.9848 21.6897zM21.6667 15.9996C21.6667 14.5352 22.8539 13.3445 24.3183 13.3445 25.7826 13.3445 26.9698 14.5352 26.9698 15.9996 26.9698 17.464 25.7826 18.6547 24.3183 18.6547 22.8539 18.6547 21.6667 17.464 21.6667 15.9996zM24.3183 21.6899C22.8539 21.6899 21.6667 22.8807 21.6667 24.345 21.6667 25.8094 22.8539 27.0001 24.3183 27.0001 25.7826 27.0001 26.9698 25.8094 26.9698 24.345 26.9698 22.8807 25.7826 21.6899 24.3183 21.6899z" fill="currentColor"></path></svg>
)
export const accountImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QjhDMEYzRkM5QjAxMUU0OUEzNzg3NkQ1Q0JCMDAzQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QjhDMEY0MEM5QjAxMUU0OUEzNzg3NkQ1Q0JCMDAzQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhCOEMwRjNEQzlCMDExRTQ5QTM3ODc2RDVDQkIwMDNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhCOEMwRjNFQzlCMDExRTQ5QTM3ODc2RDVDQkIwMDNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X/uSsgAADDtJREFUeNrsXXlQ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'


const getTypedView = (type: string) => {
    if (type === 'divider') {
        return HDivider().height(1).marginBottom('12px').background('#676879');
    } else if (type === 'spacer') {
        return Spacer()
    }
}

export const LeftSidemenu = (isLoading: boolean = false) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    // const [currentAppName, setCurrentAppName] = useState(getAppName());
    const {deleteSession} = useDeleteSession('console');
    const navigate = useNavigate();
    const { updatePrefs } = useUpdatePrefs({});

    const menu = [
        {
            name: 'Home',
            selectable: true,
            view: () => (
                //  UIRouteLink('/app/com.tuvalsoft.app.organizationmanager')(
                HStack(
                    ReactView(
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Glyph Icon" viewBox="7.210000038146973 4 49.58000183105469 56" x="409.4248" y="0" height="58.89519999999999" width="52.14328792572021" data-fill-palette-color="accent" id="s-0"><path d="M49.13 20.84l-16-9.26V4L55.7 17.05ZM32 50.52L16 41.26V22.74l16-9.26 16 9.26V41.26ZM30.91 11.58l-16 9.26L8.3 17.05 30.91 4ZM13.77 22.74V41.26L7.21 45.05V19Zm1.1 20.42l16 9.26V60L8.3 47Zm18.22 9.26l16-9.26L55.7 47 33.09 60ZM50.23 41.26V22.74L56.79 19v26.1Z" fill="#8bd8bc" data-fill-palette-color="accent" /></svg>
                    )
                )
                //)

            ),
            onClick: () => {

            }
        },
        {
            type: 'divider'
        },
        {
            name: getAppName(),
            app_name: getAppName(),
            tooltip: getAppName(),
            selectable: true,
            view: () => {
                if (getAppFullName() != null) {
                  //  runningApps.add(getAppFullName());
                }

                return (
                   Fragment()
                )

            },
            onClick: () => {

            }
        },
        {
            name: '1',
            selectable: true,
            tooltip: 'Notifications',
            view: () => (
                UIRouteLink(`/app/com.tuvalsoft.app.procetra`)(
                    ReactView(notifyElement)
                )


            )
        },
        {
            name: '2',
            selectable: true,
            tooltip: 'Inbox',
            view: () => (
                ReactView(boxElement)

            )
        },
        {
            name: '3',
            selectable: true,
            tooltip: 'Task Center',
            view: () => (
                ReactView(myTaskElement)
            ),
            onClick: () => {
            }
        },
        {
            name: '4',
            tooltip: 'Favorites',
            view: () => (
                ReactView(myFavoritesElement)

            )
        },
        {
            name: '5',
            type: 'spacer'
        },
        {
            name: '6',
            tooltip: 'Apps Marketplace',
            view: () => (
                ReactView(applicationsElement)

            ),
            onClick: () => {
              //  AppCenter.Show()
             }
        },
        {
            name: '7',
            view: () => (
                ReactView(invitePeopleElement)

            ),
            onClick: () => {
               // DynoDialog.Show(AddUserDialog())
            }
        },
        {
            name: '8',
            tooltip: 'Search',
            view: () => (
                ReactView(searchElement)

            )
        },
        {
            name: '9',
            tooltip: 'Help',
            view: () => (
                ReactView(helpElement)

            )
        },
        {
            type: 'divider'
        },
        {
            name: '10',
            view: () => (
                PopupButton(
                    ReactView(myProducts)
                )(
                    //AppSelectMenu()
                )
                    .dialogPosition(DialogPosition.TOP_START)
                    .dialogOffset({ main: -30, secondary: 55 })


            ),
            onClick: () => { }
        },
        {
            name: '11',
            tooltip: 'Logout',
            view: () => (
                HStack(
                    UIImage(accountImage).width(44).height(44).imageBorder('2px solid white')
                ).height().width()
                    .onClick(() => {
                        deleteSession({sessionId : 'current'});
                       // window.localStorage.setItem('tenant', null)
                       // window.location.replace('/logout')
                    })

            )
        }
    ]

    const func = () => {
        //alert(getAppName())
        setSelectedMenuItem(getAppName())
    }
    useEffect(() => {
        EventBus.Default.on('history.changed', func);
        return () => EventBus.Default.off('history.changed', func);
    })

    return (
        VStack({ alignment: cTopLeading })(
            /*  HStack(
                 HStack(
                     Text('Planlara goz atin').transform('rotate(-90deg)').foregroundColor(Color.white).whiteSpace('nowrap').fontSize(15).lineHeight(22)
                 ).width({ hover: '42px', default: '34px' }).cornerRadius('0 16px 16px 0').transition('background-color 200ms ease,width 200ms ease')
                     .background({ hover: '#007038', default: '#258750' })
                     .transform('translateY(-50%)')
             )
                 .width()
                 .height(158)
                 .position(PositionTypes.Fixed)
                 .top('50%'), */
            isLoading && HStack(
                Spinner()
            )
                .zIndex(1)
                .height(54).width(64).background('#333').position(PositionTypes.Absolute).left('0px').top('0px'),

            ...ForEach(menu)(item =>
                item.type != null ? getTypedView(item.type)
                    :
                    HStack(
                        HStack(
                            item.view()
                        ).height(36).width(36)

                            .cursor('pointer')
                            .background({ hover: (selectedMenuItem === item.name ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.6)'), default: selectedMenuItem === item.name ? 'rgba(255,255,255,.2)' : '' })
                            .cornerRadius(8),

                        ((item as any).selectable && ((selectedMenuItem === item.name) || (selectedMenuItem == null && getAppName() === item.name))) ?
                            HStack()
                                .borderTop('dashed 8px transparent')
                                .borderRight('dashed 6px white')
                                .borderBottom('dashed 8px transparent')
                                .borderLeft('dashed 0px white')
                                .position(PositionTypes.Absolute)


                                .width(6).height(16)

                                .left('calc(100% - 6px)')
                            : null
                    )
                        .tooltip(item.tooltip)
                        .tooltipPosition(TooltipPositions.RIGHT)
                        .height()
                        .marginBottom('8px')
                        .onClick(() => {
                            if (item.selectable) {
                                setSelectedMenuItem(item.name);
                            }
                            item.onClick ? item.onClick() : void 0;
                        }),

            ),


            /*  HStack(
                 HStack(
                     DynamicView(svgElement)
                 ).height(36).width(36).backgroundColor('rgba(255,255,255,.2)').cornerRadius(8),
                 RoundedRectangle()
                     .borderTop('dashed 8px transparent')
                     .borderRight('dashed 6px white')
                     .borderBottom('dashed 8px transparent')
                     .borderLeft('dashed 0px white')
                     .position(PositionTypes.Absolute)


                     .width(6).height(16)

                     .left('calc(100% - 6px)')
             ).height().marginBottom('8px'), */
            /*  HStack(
                 HStack(
                     DynamicView(notifyElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'), */
            /*  HStack(
                 HStack(
                     DynamicView(boxElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'),
             HStack(
                 HStack(
                     DynamicView(myTaskElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'),
             HStack(
                 HStack(
                     DynamicView(myFavoritesElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'), */
            /*  Spacer(),
             HStack(
                 UIContextMenu(
                     Text('asdsad').width(200).height(200)
                 )(
                     HStack(
                         DynamicView(applicationsElement)
                     ).height(36).width(36).cornerRadius(8)
                 )

             ).height().marginBottom('8px'), */
            /*  HStack(
                 HStack(
                     DynamicView(invitePeopleElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'),
             HStack(
                 HStack(
                     DynamicView(searchElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'),
             HStack(
                 HStack(
                     DynamicView(helpElement)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'), */
            /*  HDivider().height(1).marginBottom('12px').background('#676879'),
             HStack(
                 HStack(
                     DynamicView(myProducts)
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'),

             HStack(
                 HStack(
                     UIImage(accountImage).width(44).height(44).imageBorder('2px solid white')
                 ).height(36).width(36).cornerRadius(8)

             ).height().marginBottom('8px'), */
            HStack(
                Text('Standart').fontSize(13).fontWeight('500').foregroundColor('#00c875')

            ).height(32).background('#181d37'),

        ).maxWidth('66px').minWidth('66px').background('var(--main-theme-color)').paddingTop('10px').zIndex(2)
    )
}
function Divider(): import("@tuval/forms").UIView {
    throw new Error("Function not implemented.")
}

