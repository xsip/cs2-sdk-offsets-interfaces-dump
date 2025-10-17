#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_shard_model_desc_t {
    char vTable4154[0x8];
    int32_t m_nModelID;
    char pad_4155[0x4];
    char m_hMaterialBase[0x8];
    char m_hMaterialDamageOverlay[0x8];
    client_ShardSolid_t m_solid;
    char pad_4156[0x3];
    Vector2D m_vecPanelSize;
    Vector2D m_vecStressPositionA;
    Vector2D m_vecStressPositionB;
    char pad_4157[0x4];
    char m_vecPanelVertices[0x18];
    char m_vInitialPanelVertices[0x18];
    float32 m_flGlassHalfThickness;
    bool m_bHasParent;
    bool m_bParentFrozen;
    char pad_4158[0x2];
    CUtlStringToken m_SurfacePropStringToken;
    char end_pad_4159[0x4];
};
