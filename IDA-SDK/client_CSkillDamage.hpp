#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CSkillFloat.hpp"

class client_CSkillDamage {
    client_CSkillFloat m_flDamage;
    float32 m_flNPCDamageScalarVsNPC;
    float32 m_flPhysicsForceDamage;
};
