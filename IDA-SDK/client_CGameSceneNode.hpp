#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityInstance;
class client_CGameSceneNode;
#include "client_CGameSceneNodeHandle.hpp"
#include "client_CNetworkOriginCellCoordQuantizedVector.hpp"

class client_CGameSceneNode {
    void **__vftable_0;
    void **__vftable_1;
    CTransformWS m_nodeToWorld;
    entity2_CEntityInstance* m_pOwner;
    client_CGameSceneNode* m_pParent;
    client_CGameSceneNode* m_pChild;
    client_CGameSceneNode* m_pNextSibling;
    char pad_1750[0x28];
    client_CGameSceneNodeHandle m_hParent;
    client_CNetworkOriginCellCoordQuantizedVector m_vecOrigin;
    char pad_1751[0x8];
    QAngle m_angRotation;
    float32 m_flScale;
    VectorWS m_vecAbsOrigin;
    QAngle m_angAbsRotation;
    float32 m_flAbsScale;
    Vector m_vecWrappedLocalOrigin;
    QAngle m_angWrappedLocalRotation;
    float32 m_flWrappedScale;
    int16_t m_nParentAttachmentOrBone;
    bool m_bDebugAbsOriginChanges;
    bool m_bDormant;
    bool m_bForceParentToBeNetworked;
    char pad_1752[0x2];
    uint8_t m_nHierarchicalDepth;
    uint8_t m_nHierarchyType;
    uint8_t m_nDoNotSetAnimTimeInInvalidatePhysicsCount;
    char pad_1753[0x2];
    CUtlStringToken m_name;
    char pad_1754[0x10];
    CUtlStringToken m_hierarchyAttachName;
    float32 m_flZOffset;
    float32 m_flClientLocalScale;
    Vector m_vRenderOrigin;
    char end_pad_1755[0x10];
};
