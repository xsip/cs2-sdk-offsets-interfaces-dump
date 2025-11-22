// generated - do not edit!

import {server_CCSPlayerPawnBase} from './CCSPlayerPawnBase';
// Class size: 0x1C70
// BaseClass: : public CS2::server::CCSPlayerPawnBase
export const server_CCSPlayerPawn  = {
	...server_CCSPlayerPawnBase,
	m_pBulletServices: 3816n, // server::CCSPlayer_BulletServices**  | Schema_Ptr | Size: 0x8
	m_pHostageServices: 3824n, // server::CCSPlayer_HostageServices**  | Schema_Ptr | Size: 0x8
	m_pBuyServices: 3832n, // server::CCSPlayer_BuyServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 3840n, // server::CCSPlayer_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pRadioServices: 3848n, // server::CCSPlayer_RadioServices**  | Schema_Ptr | Size: 0x8
	m_pDamageReactServices: 3856n, // server::CCSPlayer_DamageReactServices**  | Schema_Ptr | Size: 0x8
	m_nCharacterDefIndex: 3864n, // uint16_t m_nCharacterDefIndex; |  0xf18 | Schema_Builtin | Size: 0x2
	m_bHasFemaleVoice: 3866n, // bool m_bHasFemaleVoice; |  0xf1a | Schema_Builtin | Size: 0x1
	m_strVOPrefix: 3872n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szLastPlaceName: 3880n, // char m_szLastPlaceName[18]; |  0xf28 | Schema_FixedArray | Size: 0x12
	m_bInHostageResetZone: 4072n, // bool m_bInHostageResetZone; |  0xfe8 | Schema_Builtin | Size: 0x1
	m_bInBuyZone: 4073n, // bool m_bInBuyZone; |  0xfe9 | Schema_Builtin | Size: 0x1
	m_TouchingBuyZones: 4080n, // server::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_bWasInBuyZone: 4104n, // bool m_bWasInBuyZone; |  0x1008 | Schema_Builtin | Size: 0x1
	m_bInHostageRescueZone: 4105n, // bool m_bInHostageRescueZone; |  0x1009 | Schema_Builtin | Size: 0x1
	m_bInBombZone: 4106n, // bool m_bInBombZone; |  0x100a | Schema_Builtin | Size: 0x1
	m_bWasInHostageRescueZone: 4107n, // bool m_bWasInHostageRescueZone; |  0x100b | Schema_Builtin | Size: 0x1
	m_iRetakesOffering: 4108n, // int32_t m_iRetakesOffering; |  0x100c | Schema_Builtin | Size: 0x4
	m_iRetakesOfferingCard: 4112n, // int32_t m_iRetakesOfferingCard; |  0x1010 | Schema_Builtin | Size: 0x4
	m_bRetakesHasDefuseKit: 4116n, // bool m_bRetakesHasDefuseKit; |  0x1014 | Schema_Builtin | Size: 0x1
	m_bRetakesMVPLastRound: 4117n, // bool m_bRetakesMVPLastRound; |  0x1015 | Schema_Builtin | Size: 0x1
	m_iRetakesMVPBoostItem: 4120n, // int32_t m_iRetakesMVPBoostItem; |  0x1018 | Schema_Builtin | Size: 0x4
	m_RetakesMVPBoostExtraUtility: 4124n, // client::loadout_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_flHealthShotBoostExpirationTime: 4128n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLandingTimeSeconds: 4132n, // float32 m_flLandingTimeSeconds; |  0x1024 | Schema_Builtin | Size: 0x4
	m_aimPunchAngle: 4136n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchAngleVel: 4148n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchTickBase: 4160n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_aimPunchTickFraction: 4164n, // float32 m_aimPunchTickFraction; |  0x1044 | Schema_Builtin | Size: 0x4
	m_aimPunchCache: 4168n, // GlobalTypes::CUtlVector<GlobalTypes::QAngle>  | Schema_Atomic | Size: 0x18
	m_bIsBuyMenuOpen: 4192n, // bool m_bIsBuyMenuOpen; |  0x1060 | Schema_Builtin | Size: 0x1
	m_lastLandTime: 5896n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bOnGroundLastTick: 5900n, // bool m_bOnGroundLastTick; |  0x170c | Schema_Builtin | Size: 0x1
	m_iPlayerLocked: 5904n, // int32_t m_iPlayerLocked; |  0x1710 | Schema_Builtin | Size: 0x4
	m_flTimeOfLastInjury: 5912n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextSprayDecalTime: 5916n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bNextSprayDecalTimeExpedited: 5920n, // bool m_bNextSprayDecalTimeExpedited; |  0x1720 | Schema_Builtin | Size: 0x1
	m_nRagdollDamageBone: 5924n, // int32_t m_nRagdollDamageBone; |  0x1724 | Schema_Builtin | Size: 0x4
	m_vRagdollDamageForce: 5928n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vRagdollDamagePosition: 5940n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szRagdollDamageWeaponName: 5952n, // char m_szRagdollDamageWeaponName[64]; |  0x1740 | Schema_FixedArray | Size: 0x40
	m_bRagdollDamageHeadshot: 6016n, // bool m_bRagdollDamageHeadshot; |  0x1780 | Schema_Builtin | Size: 0x1
	m_vRagdollServerOrigin: 6020n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_EconGloves: 6032n, // server::CEconItemView  | Schema_DeclaredClass | Size: 0x2a8
	m_nEconGlovesChanged: 6712n, // uint8_t m_nEconGlovesChanged; |  0x1a38 | Schema_Builtin | Size: 0x1
	m_qDeathEyeAngles: 6716n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bSkipOneHeadConstraintUpdate: 6728n, // bool m_bSkipOneHeadConstraintUpdate; |  0x1a48 | Schema_Builtin | Size: 0x1
	m_bLeftHanded: 6729n, // bool m_bLeftHanded; |  0x1a49 | Schema_Builtin | Size: 0x1
	m_fSwitchedHandednessTime: 6732n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flViewmodelOffsetX: 6736n, // float32 m_flViewmodelOffsetX; |  0x1a50 | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetY: 6740n, // float32 m_flViewmodelOffsetY; |  0x1a54 | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetZ: 6744n, // float32 m_flViewmodelOffsetZ; |  0x1a58 | Schema_Builtin | Size: 0x4
	m_flViewmodelFOV: 6748n, // float32 m_flViewmodelFOV; |  0x1a5c | Schema_Builtin | Size: 0x4
	m_bIsWalking: 6752n, // bool m_bIsWalking; |  0x1a60 | Schema_Builtin | Size: 0x1
	m_fLastGivenDefuserTime: 6756n, // float32 m_fLastGivenDefuserTime; |  0x1a64 | Schema_Builtin | Size: 0x4
	m_fLastGivenBombTime: 6760n, // float32 m_fLastGivenBombTime; |  0x1a68 | Schema_Builtin | Size: 0x4
	m_flDealtDamageToEnemyMostRecentTimestamp: 6764n, // float32 m_flDealtDamageToEnemyMostRecentTimestamp; |  0x1a6c | Schema_Builtin | Size: 0x4
	m_iDisplayHistoryBits: 6768n, // uint32_t m_iDisplayHistoryBits; |  0x1a70 | Schema_Builtin | Size: 0x4
	m_flLastAttackedTeammate: 6772n, // float32 m_flLastAttackedTeammate; |  0x1a74 | Schema_Builtin | Size: 0x4
	m_allowAutoFollowTime: 6776n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bResetArmorNextSpawn: 6780n, // bool m_bResetArmorNextSpawn; |  0x1a7c | Schema_Builtin | Size: 0x1
	m_nLastKillerIndex: 6784n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_entitySpottedState: 6792n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 6816n, // int32_t m_nSpotRules; |  0x1aa0 | Schema_Builtin | Size: 0x4
	m_bIsScoped: 6820n, // bool m_bIsScoped; |  0x1aa4 | Schema_Builtin | Size: 0x1
	m_bResumeZoom: 6821n, // bool m_bResumeZoom; |  0x1aa5 | Schema_Builtin | Size: 0x1
	m_bIsDefusing: 6822n, // bool m_bIsDefusing; |  0x1aa6 | Schema_Builtin | Size: 0x1
	m_bIsGrabbingHostage: 6823n, // bool m_bIsGrabbingHostage; |  0x1aa7 | Schema_Builtin | Size: 0x1
	m_iBlockingUseActionInProgress: 6824n, // client::CSPlayerBlockingUseAction_t  | Schema_DeclaredEnum | Size: 0x4
	m_flEmitSoundTime: 6828n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInNoDefuseArea: 6832n, // bool m_bInNoDefuseArea; |  0x1ab0 | Schema_Builtin | Size: 0x1
	m_iBombSiteIndex: 6836n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_nWhichBombZone: 6840n, // int32_t m_nWhichBombZone; |  0x1ab8 | Schema_Builtin | Size: 0x4
	m_bInBombZoneTrigger: 6844n, // bool m_bInBombZoneTrigger; |  0x1abc | Schema_Builtin | Size: 0x1
	m_bWasInBombZoneTrigger: 6845n, // bool m_bWasInBombZoneTrigger; |  0x1abd | Schema_Builtin | Size: 0x1
	m_iShotsFired: 6848n, // int32_t m_iShotsFired; |  0x1ac0 | Schema_Builtin | Size: 0x4
	m_flFlinchStack: 6852n, // float32 m_flFlinchStack; |  0x1ac4 | Schema_Builtin | Size: 0x4
	m_flVelocityModifier: 6856n, // float32 m_flVelocityModifier; |  0x1ac8 | Schema_Builtin | Size: 0x4
	m_flHitHeading: 6860n, // float32 m_flHitHeading; |  0x1acc | Schema_Builtin | Size: 0x4
	m_nHitBodyPart: 6864n, // int32_t m_nHitBodyPart; |  0x1ad0 | Schema_Builtin | Size: 0x4
	m_vecTotalBulletForce: 6868n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bWaitForNoAttack: 6880n, // bool m_bWaitForNoAttack; |  0x1ae0 | Schema_Builtin | Size: 0x1
	m_ignoreLadderJumpTime: 6884n, // float32 m_ignoreLadderJumpTime; |  0x1ae4 | Schema_Builtin | Size: 0x4
	m_bKilledByHeadshot: 6888n, // bool m_bKilledByHeadshot; |  0x1ae8 | Schema_Builtin | Size: 0x1
	m_LastHitBox: 6892n, // int32_t m_LastHitBox; |  0x1aec | Schema_Builtin | Size: 0x4
	m_pBot: 6896n, // server::CCSBot**  | Schema_Ptr | Size: 0x8
	m_bBotAllowActive: 6904n, // bool m_bBotAllowActive; |  0x1af8 | Schema_Builtin | Size: 0x1
	m_thirdPersonHeading: 6908n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flSlopeDropOffset: 6920n, // float32 m_flSlopeDropOffset; |  0x1b08 | Schema_Builtin | Size: 0x4
	m_flSlopeDropHeight: 6924n, // float32 m_flSlopeDropHeight; |  0x1b0c | Schema_Builtin | Size: 0x4
	m_vHeadConstraintOffset: 6928n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nLastPickupPriority: 6940n, // int32_t m_nLastPickupPriority; |  0x1b1c | Schema_Builtin | Size: 0x4
	m_flLastPickupPriorityTime: 6944n, // float32 m_flLastPickupPriorityTime; |  0x1b20 | Schema_Builtin | Size: 0x4
	m_ArmorValue: 6948n, // int32_t m_ArmorValue; |  0x1b24 | Schema_Builtin | Size: 0x4
	m_unCurrentEquipmentValue: 6952n, // uint16_t m_unCurrentEquipmentValue; |  0x1b28 | Schema_Builtin | Size: 0x2
	m_unRoundStartEquipmentValue: 6954n, // uint16_t m_unRoundStartEquipmentValue; |  0x1b2a | Schema_Builtin | Size: 0x2
	m_unFreezetimeEndEquipmentValue: 6956n, // uint16_t m_unFreezetimeEndEquipmentValue; |  0x1b2c | Schema_Builtin | Size: 0x2
	m_iLastWeaponFireUsercmd: 6960n, // int32_t m_iLastWeaponFireUsercmd; |  0x1b30 | Schema_Builtin | Size: 0x4
	m_bIsSpawning: 6964n, // bool m_bIsSpawning; |  0x1b34 | Schema_Builtin | Size: 0x1
	m_iDeathFlags: 6976n, // int32_t m_iDeathFlags; |  0x1b40 | Schema_Builtin | Size: 0x4
	m_bHasDeathInfo: 6980n, // bool m_bHasDeathInfo; |  0x1b44 | Schema_Builtin | Size: 0x1
	m_flDeathInfoTime: 6984n, // float32 m_flDeathInfoTime; |  0x1b48 | Schema_Builtin | Size: 0x4
	m_vecDeathInfoOrigin: 6988n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPlayerPatchEconIndices: 7000n, // uint32_t m_vecPlayerPatchEconIndices[5]; |  0x1b58 | Schema_FixedArray | Size: 0x14
	m_GunGameImmunityColor: 7020n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_grenadeParameterStashTime: 7024n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGrenadeParametersStashed: 7028n, // bool m_bGrenadeParametersStashed; |  0x1b74 | Schema_Builtin | Size: 0x1
	m_angStashedShootAngles: 7032n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecStashedGrenadeThrowPosition: 7044n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecStashedVelocity: 7056n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angShootAngleHistory: 7068n, // GlobalTypes::QAngle[2]  | Schema_FixedArray | Size: 0x18
	m_vecThrowPositionHistory: 7092n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_vecVelocityHistory: 7116n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_PredictedDamageTags: 7144n, // server::CUtlVectorEmbeddedNetworkVar<server::PredictedDamageTag_t>  | Schema_Atomic | Size: 0x68
	m_nHighestAppliedDamageTagTick: 7248n, // int32_t m_nHighestAppliedDamageTagTick; |  0x1c50 | Schema_Builtin | Size: 0x4
	m_bCommittingSuicideOnTeamChange: 7252n, // bool m_bCommittingSuicideOnTeamChange; |  0x1c54 | Schema_Builtin | Size: 0x1
	m_wasNotKilledNaturally: 7253n, // bool m_wasNotKilledNaturally; |  0x1c55 | Schema_Builtin | Size: 0x1
	m_fImmuneToGunGameDamageTime: 7256n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGunGameImmunity: 7260n, // bool m_bGunGameImmunity; |  0x1c5c | Schema_Builtin | Size: 0x1
	m_fMolotovDamageTime: 7264n, // float32 m_fMolotovDamageTime; |  0x1c60 | Schema_Builtin | Size: 0x4
	m_angEyeAngles: 7268n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
