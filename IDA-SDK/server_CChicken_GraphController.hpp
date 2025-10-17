#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CChicken_GraphController {
    char vTable579[0x28];
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
    char m_paramActivity[0x28];
    char m_paramEndActivityImmediately[0x20];
    CAnimGraphTagRef m_sActivityFinished;
    char m_paramTurnAngle[0x20];
};
