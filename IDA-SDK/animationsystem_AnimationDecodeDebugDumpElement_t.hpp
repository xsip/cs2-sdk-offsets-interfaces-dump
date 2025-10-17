#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_AnimationDecodeDebugDumpElement_t {
    int32_t m_nEntityIndex;
    char pad_414[0x4];
    CUtlString m_modelName;
    char m_poseParams[0x18];
    char m_decodeOps[0x18];
    char m_internalOps[0x18];
    char m_decodedAnims[0x18];
};
