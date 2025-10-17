#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_NodeData_t {
    int32_t m_nParent;
    Vector m_vOrigin;
    Vector m_vMinBounds;
    Vector m_vMaxBounds;
    float32 m_flMinimumDistance;
    char pad_2489[0x4];
    char m_ChildNodeIndices[0x18];
    CUtlString m_worldNodePrefix;
};
