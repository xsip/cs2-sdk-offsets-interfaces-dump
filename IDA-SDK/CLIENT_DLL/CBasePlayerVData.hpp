#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CSkillFloat.hpp"
#include "CSkillFloat.hpp"
#include "CSkillFloat.hpp"
#include "CSkillFloat.hpp"
#include "CSkillFloat.hpp"

class CBasePlayerVData {
    char pad_196[0x28];
    char m_sModelName[0xe0];
    CSkillFloat m_flHeadDamageMultiplier;
    CSkillFloat m_flChestDamageMultiplier;
    CSkillFloat m_flStomachDamageMultiplier;
    CSkillFloat m_flArmDamageMultiplier;
    CSkillFloat m_flLegDamageMultiplier;
    float32 m_flHoldBreathTime;
    float32 m_flDrowningDamageInterval;
    int32_t m_nDrowningDamageInitial;
    int32_t m_nDrowningDamageMax;
    int32_t m_nWaterSpeed;
    float32 m_flUseRange;
    float32 m_flUseAngleTolerance;
    float32 m_flCrouchTime;
};
