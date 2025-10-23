#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"
#include "client_ParticleIndex_t.hpp"

class server_lerpdata_t {
    char m_hEnt[0x4];
    client_MoveType_t m_MoveType;
    char pad_2782[0x3];
    entity2_GameTime_t m_flStartTime;
    Vector m_vecStartOrigin;
    char pad_2783[0x8];
    Quaternion m_qStartRot;
    client_ParticleIndex_t m_nFXIndex;
    char end_pad_2784[0x1c];
};
