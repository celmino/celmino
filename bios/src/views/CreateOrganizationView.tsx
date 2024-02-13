import { InputRenderer, ButtonRenderer } from "@realmocean/antd";
import { Services, useCreateOrganization, useCreateRealm, useDeleteCache, useDeleteSession, useGetMe, useListAccountMemberships, useUpdatePrefs } from "@realmocean/sdk";
import { Input, useNavigate, useParams, useState, Heading, HStack, ForEach, cLeading, darken, cHorizontal, ReactView } from "@tuval/forms";
import { VStack, cTopLeading, Button, UIViewBuilder } from "@tuval/forms";
import { Text } from '@realmocean/vibe'
import isValidDomain from 'is-valid-domain'
import { is } from "@tuval/core";
import { useGetCurrentOrganization } from "../hooks/useGetCurrentOrganization";
import { useGetOrganizationId } from "../hooks/useGetOrganizationId";
import React from "react";

export const CelminoLogoText = ({ width = 200, height = 30 } = {}) => (
    ReactView(
        <svg width={width} viewBox="1.7000000476837158 -35.900001525878906 248.24000549316406 36.400001525878906" height={height} data-palette-color="#233565"><path d="M19.7 0.5L19.7 0.5Q16.25 0.5 13.03-0.3 9.8-1.1 7.25-3.1 4.7-5.1 3.2-8.65 1.7-12.2 1.7-17.7L1.7-17.7Q1.7-22.65 3.15-26.13 4.6-29.6 7.1-31.75 9.6-33.9 12.85-34.9 16.1-35.9 19.7-35.9L19.7-35.9Q22.25-35.9 24.68-35.5 27.1-35.1 28.2-34.6L28.2-34.6 34.25-29.55 29.25-21.3 19.7-25.7Q18-25.7 16.53-24.78 15.05-23.85 14.13-22.08 13.2-20.3 13.2-17.7L13.2-17.7Q13.2-14.4 14.23-12.63 15.25-10.85 17.18-10.2 19.1-9.55 21.75-9.55L21.75-9.55Q24.3-9.55 26.58-10.08 28.85-10.6 30.6-11.3 32.35-12 33.25-12.5L33.25-12.5 33.25-2.5Q32.25-2 30.43-1.28 28.6-0.55 25.93-0.03 23.25 0.5 19.7 0.5ZM67.7 0L39.75 0 38.75-3 39.75-8 39.75-35.4 65.5-35.4 68-33.9 64.7-25.4 60.2-25.9 50.85-25.9 50.85-21.9 63.2-21.9 63.2-13.65 56.3-13.65 50.85-14.15 50.85-9.5 64.7-9.5 70.65-3.2 67.7 0ZM100.6 0L74.65 0 73.65-3 74.65-8 74.65-35.4 85.65-35.4 85.65-16.35 85.15-9.5 86.15-9.5 95.1-10 98.65-10.5 103.05-3.2 100.6 0ZM118.74 0L107.04 0 107.04-27.35 106.04-32.35 107.09-35.35 118.74-35.35 128.54-17.85 129.54-17.85 137.64-35.35 149.59-35.35 150.09-32.35 149.59-27.55 149.59 0 138.54 0 138.69-4.25 138.69-18.2 138.14-18.2 136.24-12.95 132.64-5 124.64-5 118.74-18.2 118.24-18.2 118.24-14.15 118.74 0ZM167.64 0L156.59 0 156.59-27.4 156.09-32.4 156.59-35.4 167.64-35.4 167.64 0ZM186.24 0L174.64 0 174.64-27.35 173.64-32.35 174.64-35.35 184.69-35.35 194.79-22.75 197.19-18.6 197.69-18.6 197.69-35.35 209.24-35.35 209.24-32.35 208.74-27.35 208.74 0 198.79 0 186.24-17.1 185.74-17.1 185.74-14.1 186.24 0ZM231.94 0.5L231.94 0.5Q228.74 0.5 225.56-0.28 222.39-1.05 219.76-3.05 217.14-5.05 215.54-8.6 213.94-12.15 213.94-17.7L213.94-17.7Q213.94-23.25 215.54-26.8 217.14-30.35 219.76-32.35 222.39-34.35 225.56-35.13 228.74-35.9 231.94-35.9L231.94-35.9Q235.14-35.9 238.31-35.1 241.49-34.3 244.11-32.3 246.74-30.3 248.34-26.75 249.94-23.2 249.94-17.7L249.94-17.7Q249.94-12.2 248.34-8.65 246.74-5.1 244.11-3.1 241.49-1.1 238.31-0.3 235.14 0.5 231.94 0.5ZM231.94-9.5L231.94-9.5Q235.19-9.5 236.84-11.48 238.49-13.45 238.49-17.7L238.49-17.7Q238.49-21.9 236.84-23.9 235.19-25.9 231.94-25.9L231.94-25.9Q225.44-25.9 225.44-17.7L225.44-17.7Q225.44-13.5 227.06-11.5 228.69-9.5 231.94-9.5Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#233565" className="wordmark-text-0" data-fill-palette-color="primary"></path></svg>
    )
)

export const CelminoLogoText1 = ({ width = 200, height = 30 } = {}) => (
    ReactView(
        <svg width={width} viewBox="1.7000000476837158 -35.900001525878906 248.24000549316406 36.400001525878906" height={height} data-palette-color="#233565"><path d="M19.7 0.5L19.7 0.5Q16.25 0.5 13.03-0.3 9.8-1.1 7.25-3.1 4.7-5.1 3.2-8.65 1.7-12.2 1.7-17.7L1.7-17.7Q1.7-22.65 3.15-26.13 4.6-29.6 7.1-31.75 9.6-33.9 12.85-34.9 16.1-35.9 19.7-35.9L19.7-35.9Q22.25-35.9 24.68-35.5 27.1-35.1 28.2-34.6L28.2-34.6 34.25-29.55 29.25-21.3 19.7-25.7Q18-25.7 16.53-24.78 15.05-23.85 14.13-22.08 13.2-20.3 13.2-17.7L13.2-17.7Q13.2-14.4 14.23-12.63 15.25-10.85 17.18-10.2 19.1-9.55 21.75-9.55L21.75-9.55Q24.3-9.55 26.58-10.08 28.85-10.6 30.6-11.3 32.35-12 33.25-12.5L33.25-12.5 33.25-2.5Q32.25-2 30.43-1.28 28.6-0.55 25.93-0.03 23.25 0.5 19.7 0.5ZM67.7 0L39.75 0 38.75-3 39.75-8 39.75-35.4 65.5-35.4 68-33.9 64.7-25.4 60.2-25.9 50.85-25.9 50.85-21.9 63.2-21.9 63.2-13.65 56.3-13.65 50.85-14.15 50.85-9.5 64.7-9.5 70.65-3.2 67.7 0ZM100.6 0L74.65 0 73.65-3 74.65-8 74.65-35.4 85.65-35.4 85.65-16.35 85.15-9.5 86.15-9.5 95.1-10 98.65-10.5 103.05-3.2 100.6 0ZM118.74 0L107.04 0 107.04-27.35 106.04-32.35 107.09-35.35 118.74-35.35 128.54-17.85 129.54-17.85 137.64-35.35 149.59-35.35 150.09-32.35 149.59-27.55 149.59 0 138.54 0 138.69-4.25 138.69-18.2 138.14-18.2 136.24-12.95 132.64-5 124.64-5 118.74-18.2 118.24-18.2 118.24-14.15 118.74 0ZM167.64 0L156.59 0 156.59-27.4 156.09-32.4 156.59-35.4 167.64-35.4 167.64 0ZM186.24 0L174.64 0 174.64-27.35 173.64-32.35 174.64-35.35 184.69-35.35 194.79-22.75 197.19-18.6 197.69-18.6 197.69-35.35 209.24-35.35 209.24-32.35 208.74-27.35 208.74 0 198.79 0 186.24-17.1 185.74-17.1 185.74-14.1 186.24 0ZM231.94 0.5L231.94 0.5Q228.74 0.5" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#233565" className="wordmark-text-0" data-fill-palette-color="primary"></path></svg>
    )
)

export const CelminoLogo = ({ width = 52, height = 58, color = '#8bd8bc' } = {}) => (
    ReactView(
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="7.210000038146973 4 49.58000183105469 56" x="409.4248" y="0" height={height} width={width} id="s-0"><path d="M49.13 20.84l-16-9.26V4L55.7 17.05ZM32 50.52L16 41.26V22.74l16-9.26 16 9.26V41.26ZM30.91 11.58l-16 9.26L8.3 17.05 30.91 4ZM13.77 22.74V41.26L7.21 45.05V19Zm1.1 20.42l16 9.26V60L8.3 47Zm18.22 9.26l16-9.26L55.7 47 33.09 60ZM50.23 41.26V22.74L56.79 19v26.1Z" ></path></svg>
    )
)

export const CreateOrganizationView = () => UIViewBuilder(() => {
    const { deleteCache } = useDeleteCache('console');
    const [organizationName, setOrganizationName] = useState();
    const [organizationId, setOrganizationId] = useState();
    const [mode, setMode] = useState('');

    const { me } = useGetMe('console');
    const navigate = useNavigate();
    const { deleteSession } = useDeleteSession('console');
    const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console');

    const { createTeam, isError, error } = useCreateOrganization();
    const { updatePrefs } = useUpdatePrefs({});

    return (
        VStack(
            HStack({ alignment: cLeading, spacing: 10 })(
                Heading('Celmino').fontSize('3rem').fontWeight('600').foregroundColor('#090e13')
                .fontFamily('"Hagrid", sans-serif'),
                CelminoLogo({ color: '#02B99D' })
            ).height().padding(),
            VStack({ spacing: 5 })(
                Heading(me?.email).fontSize('2rem').foregroundColor('#090e13'),
                Heading('Organizations').fontSize('4rem').foregroundColor('#090e13').lineHeight(90)
                    .fontFamily('"Hagrid", sans-serif'),


                VStack(
                    ...ForEach(memberships)(membership =>
                        HStack({ alignment: cLeading })(
                            Text(membership.teamName).fontFamily('"Graphik Regular", sans-serif').fontSize(20)
                        )
                            .cursor('pointer')
                            .height()
                            .padding(7)
                            .cornerRadius(6)
                            .background({ hover: darken('#7FE8D4', 0.05) })
                            .onClick(() => {
                                if (is.localhost()) {
                                    updatePrefs({
                                        prefs: {
                                            ...(me?.prefs ? me?.prefs : {}),
                                            organization: membership.teamId
                                        }

                                    }, () => {
                                        deleteCache();
                                        navigate(`/app/workspace/select`);
                                    })

                                } else {
                                    window.location.href = `https://${membership.teamId}.celmino.io`;
                                }
                            })
                    )
                ).padding(cHorizontal, 20).height().maxWidth('100%')
                ,
                HStack(
                    Text('Create Organization').fontSize('20px')
                        .padding('1.6rem 2rem 1.6rem 0')
                        .foregroundColor('#242938')
                )
                    .height()
                    .onClick(() => {
                        setMode('create')
                    })

                ,
                mode === 'create' &&
                VStack(
                    HStack(
                        Input().renderer(InputRenderer).onChange((e: any) => {
                            setOrganizationId(e.target.value)
                        }).width(200),
                        Text('.celmino.io').fontSize(16)
                    ).height(),
                    Input().renderer(InputRenderer).onChange((e: any) => {
                        setOrganizationName(e.target.value)
                    }),
                    Button().renderer(ButtonRenderer).label('Submit')
                        .onClick(async () => {

                            createTeam({
                                name: organizationName,
                                id: organizationId
                            }, async (team) => {


                                /*    const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                                   const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                                   const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                                   const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                                   const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false); */

                                if (is.localhost()) {
                                    updatePrefs({
                                        prefs: {
                                            ...(me?.prefs ? me?.prefs : {}),
                                            organization: team.$id
                                        }

                                    }, () => {
                                        deleteCache();
                                        navigate(`/app/workspace/select`);
                                    })

                                } else {
                                    window.location.href = `https://${organizationId}.celmino.io`;
                                }
                            })




                        })
                ).height(),
                isError && Text(error.message).fontSize(16),
                HStack(
                    Text('Log in with another email')
                        .fontSize(16)
                )
                    .height()
                    .onClick(() => {
                        navigate('/logout')
                    })
            ).width(),
            HStack().height('9rem')
                .background('linear-gradient(0deg,#fff 42.67%,hsla(0,0%,100%,.8) 60.67%,hsla(0,0%,100%,0))')
        ).background('#7FE8D4')
    )
})
