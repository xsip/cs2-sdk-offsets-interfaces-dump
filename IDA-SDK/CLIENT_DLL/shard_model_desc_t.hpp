#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class shard_model_desc_t {
    char _vtable_pad_1107[0x8];
    int32_t m_nModelID;
    char pad_1108[0x4];
    char m_hMaterialBase[0x8];
    char m_hMaterialDamageOverlay[0x8];
    ShardSolid_t m_solid;
    char pad_1109[0x3];
    Vector2D m_vecPanelSize;
    Vector2D m_vecStressPositionA;
    Vector2D m_vecStressPositionB;
    char pad_1110[0x4];
    char m_vecPanelVertices[0x18];
    char m_vInitialPanelVertices[0x18];
    float32 m_flGlassHalfThickness;
    bool m_bHasParent;
    bool m_bParentFrozen;
    char pad_1111[0x2];
    CUtlStringToken m_SurfacePropStringToken;
    char end_pad_1112[0x4];
};
