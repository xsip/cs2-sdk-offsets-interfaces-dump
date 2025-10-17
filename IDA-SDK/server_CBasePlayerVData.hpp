#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CSkillFloat.hpp"
#include "client_CSkillFloat.hpp"
#include "client_CSkillFloat.hpp"
#include "client_CSkillFloat.hpp"
#include "client_CSkillFloat.hpp"

class server_CBasePlayerVData {
    char pad_759[0x28];
    char m_sModelName[0xe0];
    client_CSkillFloat m_flHeadDamageMultiplier;
    client_CSkillFloat m_flChestDamageMultiplier;
    client_CSkillFloat m_flStomachDamageMultiplier;
    client_CSkillFloat m_flArmDamageMultiplier;
    client_CSkillFloat m_flLegDamageMultiplier;
    float32 m_flHoldBreathTime;
    float32 m_flDrowningDamageInterval;
    int32_t m_nDrowningDamageInitial;
    int32_t m_nDrowningDamageMax;
    int32_t m_nWaterSpeed;
    float32 m_flUseRange;
    float32 m_flUseAngleTolerance;
    float32 m_flCrouchTime;
};
