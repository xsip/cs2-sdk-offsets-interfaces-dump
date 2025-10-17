#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_FrameStamp_t.hpp"

class modellib_Frame_t {
    float32 m_flTime;
    modellib_FrameStamp_t m_Stamp;
    CTransform m_Transform;
    bool m_bTeleport;
    char pad_393[0x7];
    char m_CompositeBones[0x18];
    char m_SimStateBones[0x18];
    char m_FeModelAnims[0x18];
    char m_FeModelPos[0x18];
    char m_FlexControllerWeights[0x18];
};
