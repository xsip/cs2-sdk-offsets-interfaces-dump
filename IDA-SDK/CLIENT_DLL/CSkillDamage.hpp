#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CSkillFloat.hpp"

class CSkillDamage {
    CSkillFloat m_flDamage;
    float32 m_flNPCDamageScalarVsNPC;
    float32 m_flPhysicsForceDamage;
};
