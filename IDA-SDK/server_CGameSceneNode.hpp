#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityInstance;
class server_CGameSceneNode;
#include "server_CGameSceneNodeHandle.hpp"
#include "client_CNetworkOriginCellCoordQuantizedVector.hpp"

class server_CGameSceneNode {
    char vTable3645[0x10];
    CTransformWS m_nodeToWorld;
    entity2_CEntityInstance* m_pOwner;
    server_CGameSceneNode* m_pParent;
    server_CGameSceneNode* m_pChild;
    server_CGameSceneNode* m_pNextSibling;
    char pad_3646[0x28];
    server_CGameSceneNodeHandle m_hParent;
    client_CNetworkOriginCellCoordQuantizedVector m_vecOrigin;
    char pad_3647[0x8];
    QAngle m_angRotation;
    float32 m_flScale;
    VectorWS m_vecAbsOrigin;
    QAngle m_angAbsRotation;
    float32 m_flAbsScale;
    int16_t m_nParentAttachmentOrBone;
    bool m_bDebugAbsOriginChanges;
    bool m_bDormant;
    bool m_bForceParentToBeNetworked;
    char pad_3648[0x2];
    uint8_t m_nHierarchicalDepth;
    uint8_t m_nHierarchyType;
    uint8_t m_nDoNotSetAnimTimeInInvalidatePhysicsCount;
    char pad_3649[0x2];
    CUtlStringToken m_name;
    char pad_3650[0x3c];
    CUtlStringToken m_hierarchyAttachName;
    float32 m_flZOffset;
    float32 m_flClientLocalScale;
    Vector m_vRenderOrigin;
    char end_pad_3651[0x10];
};
