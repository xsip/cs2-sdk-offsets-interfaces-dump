#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class C_CSGO_PreviewPlayer_GraphController {
    char _vtable_pad_16[0x28];
    char m_vecParamsToResetInPostGraphUpdate[0x58];
    char m_sDestructiblePartDestroyedHitGroup[0x28];
    char m_nDestructiblePartDestroyedPartIndex[0x20];
    char m_bHITGROUP_INVALID_Destroyed[0x20];
    char m_bHITGROUP_GENERIC_Destroyed[0x20];
    char m_bHITGROUP_HEAD_Destroyed[0x20];
    char m_bHITGROUP_CHEST_Destroyed[0x20];
    char m_bHITGROUP_STOMACH_Destroyed[0x20];
    char m_bHITGROUP_LEFTARM_Destroyed[0x20];
    char m_bHITGROUP_RIGHTARM_Destroyed[0x20];
    char m_bHITGROUP_LEFTLEG_Destroyed[0x20];
    char m_bHITGROUP_RIGHTLEG_Destroyed[0x20];
    char m_bHITGROUP_NECK_Destroyed[0x20];
    char m_bHITGROUP_UNUSED_Destroyed[0x20];
    char m_bHITGROUP_GEAR_Destroyed[0x20];
    char m_bHITGROUP_SPECIAL_Destroyed[0x20];
    char m_pszCharacterMode[0x28];
    char m_pszTeamPreviewVariant[0x28];
    char m_pszTeamPreviewPosition[0x28];
    char m_pszEndOfMatchCelebration[0x28];
    char m_nTeamPreviewRandom[0x20];
    char m_pszWeaponState[0x28];
    char m_pszWeaponType[0x28];
    char m_bCT[0x20];
};
