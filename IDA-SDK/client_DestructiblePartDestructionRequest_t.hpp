#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_DestructiblePartDestructionRequest_t {
    client_EDestructibleParts_DestroyParameterFlags m_nDestroyFlags;
    client_DamageTypes_t m_nDamageType;
    float32 m_flPartDamage;
    float32 m_flPartDamageRadius;
    VectorWS m_vWsPartDamageOrigin;
    Vector m_vWsPartDamageForce;
};
