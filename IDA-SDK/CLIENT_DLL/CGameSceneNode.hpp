#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CEntityInstance;
class CGameSceneNode;
#include "CGameSceneNodeHandle.hpp"
#include "CNetworkOriginCellCoordQuantizedVector.hpp"

class CGameSceneNode {
    char _vtable_pad_375[0x10];
    CTransformWS m_nodeToWorld;
    CEntityInstance* m_pOwner;
    CGameSceneNode* m_pParent;
    CGameSceneNode* m_pChild;
    CGameSceneNode* m_pNextSibling;
    char pad_376[0x28];
    CGameSceneNodeHandle m_hParent;
    CNetworkOriginCellCoordQuantizedVector m_vecOrigin;
    char pad_377[0x8];
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
    char pad_378[0x2];
    uint8_t m_nHierarchicalDepth;
    uint8_t m_nHierarchyType;
    uint8_t m_nDoNotSetAnimTimeInInvalidatePhysicsCount;
    char pad_379[0x2];
    CUtlStringToken m_name;
    char pad_380[0x40];
    CUtlStringToken m_hierarchyAttachName;
    float32 m_flZOffset;
    float32 m_flClientLocalScale;
    Vector m_vRenderOrigin;
    char end_pad_381[0x10];
};
