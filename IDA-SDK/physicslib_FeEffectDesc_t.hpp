#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeEffectDesc_t {
    CUtlString sName;
    uint32_t nNameHash;
    int32_t nType;
    KeyValues3 m_Params;
};
